import * as Toggle from '@radix-ui/react-toggle';
import { useContext } from 'react';
import { useI18n } from 'react-simple-i18n';
import { langContext } from '../../lang/lang.context';
import { Language } from '../../lang/lang.model';
import './Header.scss';

export const Header: React.FC = () => {
  const { t } = useI18n();
  const { language, setLanguage } = useContext(langContext);

  const switchLanguage = () => {
    setLanguage((lang) =>
      lang === Language.ENGLISH ? Language.HEBREW : Language.ENGLISH
    );
  };

  return (
    <header className="header">
      <Toggle.Root
        className="toggle-lang"
        aria-label="toggle language"
        lang={language === Language.ENGLISH ? 'he' : 'en'}
        onPressedChange={switchLanguage}
      >
        {t('otherLang')}
      </Toggle.Root>
    </header>
  );
};
