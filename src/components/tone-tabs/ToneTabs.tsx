import * as Tabs from '@radix-ui/react-tabs';
import { LetterTone, Yagl } from '../../models/app.model';
import { yaglToCasual, yaglToFormal, yaglToFunny } from '../../utils/utils';
import './ToneTabs.scss';

export interface ToneTabsProps {
  yagl?: Yagl;
}

export const ToneTabs: React.FC<ToneTabsProps> = ({ yagl }) => {
  return (
    <Tabs.Root className="tone-tabs" defaultValue={LetterTone.CASUAL}>
      <Tabs.List className="tab-list">
        <Tabs.Trigger className="tab-button" value={LetterTone.FORMAL}>
          <span className="tab-text">Formal </span>
          {LetterTone.FORMAL}
        </Tabs.Trigger>
        <Tabs.Trigger className="tab-button" value={LetterTone.CASUAL}>
          <span className="tab-text">Casual </span>
          {LetterTone.CASUAL}
        </Tabs.Trigger>
        <Tabs.Trigger className="tab-button" value={LetterTone.FUNNY}>
          <span className="tab-text">Funny </span>
          {LetterTone.FUNNY}
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="tab-panel"
        value={LetterTone.FORMAL}
        contentEditable={true}
      >
        {yagl && yaglToFormal(yagl)}
      </Tabs.Content>
      <Tabs.Content
        className="tab-panel"
        value={LetterTone.CASUAL}
        contentEditable={true}
      >
        {yagl && yaglToCasual(yagl)}
      </Tabs.Content>
      <Tabs.Content
        className="tab-panel"
        value={LetterTone.FUNNY}
        contentEditable={true}
      >
        {yagl && yaglToFunny(yagl)}
      </Tabs.Content>
    </Tabs.Root>
  );
};
