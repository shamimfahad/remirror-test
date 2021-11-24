import { Dispatch, FunctionComponent, useCallback, useState } from 'react';
import { htmlToProsemirrorNode } from 'remirror';
import {
  BoldExtension,
  CalloutExtension,
  ItalicExtension,
  UnderlineExtension,
  StrikeExtension,
  HeadingExtension,
  BulletListExtension,
  HardBreakExtension,
  LinkExtension,
  OrderedListExtension,
  TaskListExtension,
  BlockquoteExtension,
  ColumnsExtension,
  FontFamilyExtension,
  MarkdownExtension,
  SubExtension,
  SupExtension,
  TextCaseExtension,
  TableExtension,
  YjsExtension
} from 'remirror/extensions';
import {
  Remirror,
  ThemeProvider,
  Toolbar,
  TableComponents,
  // useActive,
  // useCommands,
  useHelpers,
  useKeymap,
  useRemirror,
  useRemirrorContext,
} from '@remirror/react';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';

// import { AllStyledComponent } from '@remirror/styles/styled-components';

import 'remirror/styles/all.css';
import '@remirror/styles/extension-placeholder.css';
import './Editor.css'
import { toolbarItems } from './Toolbar';

const ydoc = new Y.Doc();
// clients connected to the same room-name share document updates
const provider = new WebrtcProvider('remirror-test-demo', ydoc);

// Hooks can be added to the context without the need for creating custom components
const hooks = [
  () => {
    const { getJSON } = useHelpers();

    const onSave = useCallback(
      (props) => {
        const { state } = props;
        console.log(getJSON(state));

        return true; // Prevents any further key handlers from being run.
      },
      [getJSON]
    );

    // "Mod" means platform agnostic modifier key - i.e. Ctrl on Windows, or Cmd on MacOS
    useKeymap('Mod-s', onSave);
  },
];

const EditorComponent = () => {
  const { getRootProps } = useRemirrorContext();

  return <div {...getRootProps} />
}

interface IEditorProps {
  content: any;
  setContent: Dispatch<any>;
}

const Editor: FunctionComponent<IEditorProps> = (props: IEditorProps) => {
  const [editable, setEditable] = useState<any>(false);
  const extensions = () => [
    new BoldExtension(),
    new ItalicExtension(),
    new UnderlineExtension(),
    new StrikeExtension(),
    new CalloutExtension({ defaultType: 'warn' }), // Override defaultType: 'info'
    new HeadingExtension(),
    new BulletListExtension(),
    new OrderedListExtension(),
    new TaskListExtension(),
    new LinkExtension(),
    /**
     * `HardBreakExtension` allows us to create a newline inside paragraphs .
     *  e.g. in a list item
     */
    new HardBreakExtension(),
    new BlockquoteExtension(),
    new ColumnsExtension(),
    new FontFamilyExtension(),
    new MarkdownExtension(),
    new SubExtension(),
    new SupExtension(),
    new TextCaseExtension(),
    new TableExtension(),
    new YjsExtension({ getProvider: () => provider }),
  ];
  const { manager, state } = useRemirror({
    extensions, // Set the initial content.
    content: props.content,

    // Place the cursor at the start of the document. This an also be set to
    // `end`, `all` or a numbered position.
    selection: 'start',

    // Set the string handler which means the content provided will be
    // automatically handled as html.
    // `markdown` is also available when the `MarkdownExtension`
    // is added to the editor.
    stringHandler: htmlToProsemirrorNode,
  });

  const handleChange = (data: any) => {
    props.setContent(data.state.doc.toJSON())
  }

  const handleEditorClick = () => {
    setEditable(true);
  }

  // The editor is built up like lego blocks of functionality within the editor
  // provider.
  return (
    <div className='remirror-theme' onClick={handleEditorClick}>
      <ThemeProvider>
        <Remirror
          manager={manager}
          initialContent={state}
          autoFocus
          autoRender='end'
          hooks={hooks}
          editable={editable ?? true}
          placeholder={`Start writing... || open new tab to see real time collab`}
          onChange={handleChange}
        > {
            editable && (
              <Toolbar items={toolbarItems} refocusEditor label='Top Toolbar' />
            )
          }
          <EditorComponent />
          <TableComponents />
        </Remirror>
      </ThemeProvider>
    </div>
  );
};

Editor.defaultProps = {}

export default Editor;
