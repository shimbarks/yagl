import * as Tabs from '@radix-ui/react-tabs';
import { useContext, useRef, useState } from 'react';
import { useI18n } from 'react-simple-i18n';
import { useUpdateEffect } from '../../hooks/use-update-effect';
import { langContext } from '../../lang/lang.context';
import { Language } from '../../lang/lang.model';
import { LetterTone, Yagl } from '../../models/app.model';
import { getEnumKeyByValue } from '../../utils/common.utils';
import {
  yaglToCasual,
  yaglToFormal,
  yaglToFunny,
} from '../../utils/yagl.utils';
import './ToneTabs.scss';

export interface ToneTabsProps {
  yagl?: Yagl;
  resetFlag: boolean;
}

const yaglToneFuncMap: { [key in LetterTone]: (yagl: Yagl) => string } = {
  [LetterTone.FORMAL]: yaglToFormal,
  [LetterTone.CASUAL]: yaglToCasual,
  [LetterTone.FUNNY]: yaglToFunny,
};

export const ToneTabs: React.FC<ToneTabsProps> = ({ yagl, resetFlag }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [href, setHref] = useState<string>('');
  const { language } = useContext(langContext);
  const { t } = useI18n();

  const renderTabButton = (tone: LetterTone) => {
    const key = getEnumKeyByValue(LetterTone, tone);

    return (
      <Tabs.Trigger
        key={tone}
        className="tab-button"
        value={tone}
        aria-label={key}
      >
        <span className="tab-text">{t(`tones.${tone}`)}</span>
        {tone}
      </Tabs.Trigger>
    );
  };

  const renderTabPanel = (
    tone: LetterTone,
    genFunc: (yagl: Yagl) => string,
    yagl?: Yagl
  ) => {
    return (
      <Tabs.Content
        key={tone}
        className="tab-panel"
        value={tone}
        contentEditable={true}
      >
        {yagl && genFunc(yagl)}
      </Tabs.Content>
    );
  };

  useUpdateEffect(() => {
    const tabPanels = ref.current?.querySelectorAll('.tab-panel');
    tabPanels?.forEach((panel) => (panel.textContent = ''));
  }, [resetFlag]);

  const getLetterContent = () => {
    const activeTab = ref.current?.querySelector(
      '.tab-panel[data-state="active"]'
    );

    return activeTab?.textContent;
  };

  const copyToClipboard = () => {
    const content = getLetterContent();

    if (content) {
      navigator.clipboard.writeText(content).then(() => alert('Text copied!'));
    }
  };

  const constructHref = () => {
    const content = getLetterContent() ?? '';
    const subject = encodeURIComponent('Yet Another Goodbye Letter');
    const mailTo = `mailto:?subject=${subject}&body=${content}`;
    setHref(mailTo);
  };

  return (
    <Tabs.Root
      ref={ref}
      className="tone-tabs"
      dir={language === Language.ENGLISH ? 'ltr' : 'rtl'}
      defaultValue={LetterTone.CASUAL}
    >
      <Tabs.List className="tab-list">
        {Object.values(LetterTone).map((tone) => renderTabButton(tone))}
      </Tabs.List>
      {Object.values(LetterTone).map((tone) =>
        renderTabPanel(tone, yaglToneFuncMap[tone], yagl)
      )}
      <div className="tab-actions">
        <a
          className="icon-button"
          href={href}
          title={t('actions.sendByEmail')}
          onClick={constructHref}
        >
          📧
        </a>
        <button
          className="icon-button"
          onClick={copyToClipboard}
          title={t('actions.copyToClipboard')}
        >
          📋
        </button>
      </div>
    </Tabs.Root>
  );
};
