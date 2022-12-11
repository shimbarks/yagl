import * as Tabs from '@radix-ui/react-tabs';
import { LetterTone, Yagl } from '../../models/app.model';
import {
  getEnumKeyByValue,
  yaglToCasual,
  yaglToFormal,
  yaglToFunny,
} from '../../utils/utils';
import './ToneTabs.scss';

export interface ToneTabsProps {
  yagl?: Yagl;
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

export const ToneTabs: React.FC<ToneTabsProps> = ({ yagl }) => {
  return (
    <Tabs.Root className="tone-tabs" defaultValue={LetterTone.CASUAL}>
      <Tabs.List className="tab-list">
        {Object.values(LetterTone).map((tone) => renderTabButton(tone))}
      </Tabs.List>
      {Object.values(LetterTone).map((tone) =>
        renderTabPanel(tone, yaglToneFuncMap[tone], yagl)
      )}
    </Tabs.Root>
  );
};
