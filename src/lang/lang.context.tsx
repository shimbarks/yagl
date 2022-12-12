import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { createI18n, I18nProvider } from 'react-simple-i18n';
import { langData } from './lang.data';
import { Language } from './lang.model';

export interface LangContextProps {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

const initialValue: LangContextProps = {
  language: Language.ENGLISH,
  setLanguage: () => null,
};

export const langContext = createContext<LangContextProps>(initialValue);

export interface LangContextProviderProps {
  children: ReactElement;
}

export const LangContextProvider: React.FC<LangContextProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(Language.ENGLISH);

  return (
    <langContext.Provider
      value={{
        ...initialValue,
        language,
        setLanguage,
      }}
    >
      <I18nProvider i18n={createI18n(langData, { lang: language })}>
        {children}
      </I18nProvider>
    </langContext.Provider>
  );
};
