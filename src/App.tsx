import { useId, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './App.scss';
import { ToneTabs } from './components/tone-tabs/ToneTabs';
import { YaglForm } from './components/yagl-form/YaglForm';
import { Yagl } from './models/app.model';
import { yaglDefaultValues, yaglResolver } from './schemas/yagl.schema';
import { parseYagl, yaglToString } from './utils/yagl.utils';

export const App = () => {
  const formId = useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [yagl, setYagl] = useState<Yagl>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Yagl>({
    defaultValues: yaglDefaultValues,
    resolver: yaglResolver,
  });

  const getYaglFromTextarea = (): Yagl | null => {
    return textareaRef.current && parseYagl(textareaRef.current.value);
  };

  const syncFormWithTextarea = () => {
    const data = getYaglFromTextarea();

    if (data) {
      const entries = Object.entries(data) as Entries<Required<Yagl>>;
      entries.forEach(([key, value]) => setValue(key, value));
    }
  };

  const syncTextareaWithForm = (formData: Yagl) => {
    if (textareaRef.current) {
      const yaglString = yaglToString(formData);
      textareaRef.current.value = yaglString;
    }
  };

  const generateLetter: SubmitHandler<Yagl> = (formData) => {
    if (formData) {
      setYagl(formData);
      syncTextareaWithForm(formData);
    } else {
      const data = getYaglFromTextarea();

      if (data) {
        setYagl(data);
      }
    }
  };

  return (
    <main className="app">
      <h1 className="heading">yet another goodbye letter</h1>
      <section className="data-section">
        <form
          id={formId}
          className="yagl-form"
          onSubmit={handleSubmit(generateLetter)}
        >
          <YaglForm register={register} errors={errors} />
        </form>
        <textarea
          ref={textareaRef}
          className="code-editor"
          onBlur={syncFormWithTextarea}
        ></textarea>
      </section>
      <button type="submit" className="submit-button" form={formId}>
        generate letter
      </button>
      <ToneTabs yagl={yagl} />
    </main>
  );
};
