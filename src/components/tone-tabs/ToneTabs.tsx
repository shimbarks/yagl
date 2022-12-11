import * as Tabs from '@radix-ui/react-tabs';
import { LetterTone, Yagl } from '../../models/app.model';
import { yaglToCasual, yaglToFormal, yaglToFunny } from '../../utils/utils';

export interface ToneTabsProps {
  yagl?: Yagl;
}

export const ToneTabs: React.FC<ToneTabsProps> = ({ yagl }) => {
  return (
    <Tabs.Root defaultValue={LetterTone.CASUAL}>
      <Tabs.List>
        <Tabs.Trigger value={LetterTone.FORMAL}>
          {LetterTone.FORMAL}
        </Tabs.Trigger>
        <Tabs.Trigger value={LetterTone.CASUAL}>
          {LetterTone.CASUAL}
        </Tabs.Trigger>
        <Tabs.Trigger value={LetterTone.FUNNY}>{LetterTone.FUNNY}</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value={LetterTone.FORMAL}>
        {yagl && yaglToFormal(yagl)}
      </Tabs.Content>
      <Tabs.Content value={LetterTone.CASUAL}>
        {yagl && yaglToCasual(yagl)}
      </Tabs.Content>
      <Tabs.Content value={LetterTone.FUNNY}>
        {yagl && yaglToFunny(yagl)}
      </Tabs.Content>
    </Tabs.Root>
  );
};
