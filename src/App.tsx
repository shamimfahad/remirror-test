import { useState } from 'react';
import './App.css';
import Editor from './Editor';
import SocialEditorComponent from './SocialEditor';

function App() {
  const [content, setContent] = useState<any>('');
  return (
    <div className='App'>
      <h3>Remirror</h3>
      <Editor content={content} setContent={setContent} />
      <div style={{ height: '4rem', width: '100%' }}></div>
      {/* <Editor editable={false} content={content} setContent={setContent} /> */}
      <SocialEditorComponent />
    </div>
  );
}

export default App;
