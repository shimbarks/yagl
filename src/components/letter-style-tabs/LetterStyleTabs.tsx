import * as Tabs from '@radix-ui/react-tabs';
import { LetterStyle, Yagl } from '../../models/app.model';
import { yaglToCasual, yaglToChill, yaglToFormal } from '../../utils/utils';

export interface LetterStyleTabsProps {
  yagl?: Yagl;
}

export const LetterStyleTabs: React.FC<LetterStyleTabsProps> = ({ yagl }) => {
  return (
    <Tabs.Root defaultValue={LetterStyle.CASUAL}>
      <Tabs.List>
        <Tabs.Trigger value={LetterStyle.FORMAL}>
          {LetterStyle.FORMAL}
        </Tabs.Trigger>
        <Tabs.Trigger value={LetterStyle.CASUAL}>
          {LetterStyle.CASUAL}
        </Tabs.Trigger>
        <Tabs.Trigger value={LetterStyle.CHILL}>
          {LetterStyle.CHILL}
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value={LetterStyle.FORMAL}>
        {yagl && yaglToFormal(yagl)}
      </Tabs.Content>
      <Tabs.Content value={LetterStyle.CASUAL}>
        {yagl && yaglToCasual(yagl)}
      </Tabs.Content>
      <Tabs.Content value={LetterStyle.CHILL}>
        {yagl && yaglToChill(yagl)}
      </Tabs.Content>
    </Tabs.Root>
  );
};
