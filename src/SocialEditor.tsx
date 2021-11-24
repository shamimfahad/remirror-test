import { SocialEditor } from '@remirror/react-editors/social';

const USERS = [
  { id: 'joe', label: 'Joe' },
  { id: 'sue', label: 'Sue' },
  { id: 'pat', label: 'Pat' },
  { id: 'tom', label: 'Tom' },
  { id: 'jim', label: 'Jim' },
];

const TAGS = ['editor', 'remirror', 'opensource', 'prosemirror'];

const SocialEditorComponent = () => {
  return (
    <SocialEditor users={USERS} tags={TAGS} />
  )
}

export default SocialEditorComponent
