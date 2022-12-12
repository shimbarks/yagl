import * as Tabs from '@radix-ui/react-tabs';
import { useRef } from 'react';
import { useUpdateEffect } from '../../hooks/use-update-effect';
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

const renderTabButton = (tone: LetterTone) => {
  const key = getEnumKeyByValue(LetterTone, tone);

  return (
    <Tabs.Trigger
      key={tone}
      className="tab-button"
      value={tone}
      aria-label={key}
    >
      <span className="tab-text">{key}</span>
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

export const ToneTabs: React.FC<ToneTabsProps> = ({ yagl, resetFlag }) => {
  const ref = useRef<HTMLDivElement>(null);

  useUpdateEffect(() => {
    const tabPanels = ref.current?.querySelectorAll('.tab-panel');
    tabPanels?.forEach((panel) => (panel.textContent = ''));
  }, [resetFlag]);

  const copyToClipboard = () => {
    const activeTab = ref.current?.querySelector(
      '.tab-panel[data-state="active"]'
    );

    if (activeTab?.textContent) {
      navigator.clipboard
        .writeText(activeTab.textContent)
        .then(() => alert('Text copied!'));
    }
  };

  return (
    <Tabs.Root ref={ref} className="tone-tabs" defaultValue={LetterTone.CASUAL}>
      <div className="tab-actions">
        <button
          className="icon-button"
          onClick={copyToClipboard}
          title="copy to clipboard"
        >
          📋
        </button>
      </div>
      <Tabs.List className="tab-list">
        {Object.values(LetterTone).map((tone) => renderTabButton(tone))}
      </Tabs.List>
      {Object.values(LetterTone).map((tone) =>
        renderTabPanel(tone, yaglToneFuncMap[tone], yagl)
      )}
    </Tabs.Root>
  );
};
