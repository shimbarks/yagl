import { useRef, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import './App.scss';
import { LetterStyleTabs } from './components/letter-style-tabs/LetterStyleTabs';
import { YaglForm } from './components/yagl-form/YaglForm';
import { Yagl } from './models/app.model';
import { parseYagl, yaglToString } from './utils/utils';

export const App = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [yagl, setYagl] = useState<Yagl>();

  const generateLetter: SubmitHandler<Yagl> = (data) => {
    if (data) {
      setYagl(data);

      if (textAreaRef.current) {
        const yaglString = yaglToString(data);
        textAreaRef.current.value = yaglString;
      }
    } else if (textAreaRef.current) {
      setYagl(parseYagl(textAreaRef.current.value));
    }
  };

  return (
    <main className="app">
      <h1 className="heading">yet another goodbye letter</h1>
      <section>
        <textarea ref={textAreaRef} className="code-editor"></textarea>
        <YaglForm onSubmit={generateLetter} />
      </section>
      <LetterStyleTabs yagl={yagl} />
    </main>
  );
};
