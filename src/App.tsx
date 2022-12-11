import { useId, useRef, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import './App.scss';
import { ToneTabs } from './components/tone-tabs/ToneTabs';
import { YaglForm } from './components/yagl-form/YaglForm';
import { Yagl } from './models/app.model';
import { parseYagl, yaglToString } from './utils/utils';

export const App = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [yagl, setYagl] = useState<Yagl>();
  const [data, setData] = useState<Yagl>();
  const formId = useId();

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

  const onTextAreaBlur = () => {
    if (textAreaRef.current) {
      setData(parseYagl(textAreaRef.current.value));
    }
  };

  return (
    <main className="app">
      <h1 className="heading">yet another goodbye letter</h1>
      <section className="data-section">
        <YaglForm id={formId} onSubmit={generateLetter} data={data} />
        <textarea
          ref={textAreaRef}
          className="code-editor"
          onBlur={onTextAreaBlur}
        ></textarea>
      </section>
      <button type="submit" className="submit-button" form={formId}>
        generate letter
      </button>
      <ToneTabs yagl={yagl} />
    </main>
  );
};
