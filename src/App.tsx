import { useRef, useState } from 'react';
import './App.scss';
import { LetterStyleTabs } from './components/letter-style-tabs/LetterStyleTabs';
import { Yagl } from './models/app.model';
import { parseYagl } from './utils/utils';

function App() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [yagl, setYagl] = useState<Yagl>();

  const generateLetter = () => {
    if (!textAreaRef.current) {
      return;
    }

    setYagl(parseYagl(textAreaRef.current.value));
  };

  return (
    <main className="app">
      <h1 className="heading">Yet Another Goodbye Letter</h1>
      <section>
        <textarea ref={textAreaRef} className="code-editor"></textarea>
      </section>
      <button onClick={generateLetter}>Generate Letter</button>
      {<LetterStyleTabs yagl={yagl} />}
    </main>
  );
}

export default App;
