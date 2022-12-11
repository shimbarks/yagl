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
      <Tabs.List>
        <Tabs.Trigger className="tab-button" value={LetterTone.FORMAL}>
          {`Formal ${LetterTone.FORMAL}`}
        </Tabs.Trigger>
        <Tabs.Trigger className="tab-button" value={LetterTone.CASUAL}>
          {`Casual ${LetterTone.CASUAL}`}
        </Tabs.Trigger>
        <Tabs.Trigger className="tab-button" value={LetterTone.FUNNY}>
          {`Funny ${LetterTone.FUNNY}`}
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="tab-panel" value={LetterTone.FORMAL}>
        {yagl && yaglToFormal(yagl)}
      </Tabs.Content>
      <Tabs.Content className="tab-panel" value={LetterTone.CASUAL}>
        {yagl && yaglToCasual(yagl)}
      </Tabs.Content>
      <Tabs.Content className="tab-panel" value={LetterTone.FUNNY}>
        {yagl && yaglToFunny(yagl)}
      </Tabs.Content>
    </Tabs.Root>
  );
};
