import { useId, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useI18n } from 'react-simple-i18n';
import './App.scss';
import { Header } from './components/header/Header';
import { ToneTabs } from './components/tone-tabs/ToneTabs';
import { YaglForm } from './components/yagl-form/YaglForm';
import { Yagl } from './models/app.model';
import { yaglDefaultValues, yaglResolver } from './schemas/yagl.schema';
import { parseYagl, yaglToString } from './utils/yagl.utils';

export const App = () => {
  const formId = useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [yagl, setYagl] = useState<Yagl>();
  const [resetTabsFlag, setResetTabsFlag] = useState<boolean>(false);
  const { t } = useI18n();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
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

  const handleRestart = () => {
    reset();
    setYagl(undefined);
    setResetTabsFlag((val) => !val);

    if (textareaRef.current) {
      textareaRef.current.value = '';
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <h1 className="heading">{t('heading')}</h1>
        <section className="data-section">
          <form
            id={formId}
            className="yagl-form"
            onSubmit={handleSubmit(generateLetter)}
          >
            <YaglForm register={register} errors={errors} />
          </form>
          <textarea
            dir="ltr"
            ref={textareaRef}
            className="code-editor"
            onBlur={syncFormWithTextarea}
          ></textarea>
        </section>
        <div className="actions">
          <button
            type="submit"
            className="app-button submit-button"
            form={formId}
          >
            {t('actions.generateLetter')}
          </button>
          <button
            type="button"
            className="app-button text-button"
            onClick={handleRestart}
          >
            {t('actions.restart')}
          </button>
        </div>
        <ToneTabs yagl={yagl} resetFlag={resetTabsFlag} />
      </main>
    </div>
  );
};
