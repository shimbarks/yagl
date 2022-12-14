import { Language } from '../lang/lang.model';
import {
  HebrewTimeUnit,
  HebrewTimeUnitsMap,
  LetterTone,
  Period,
  Yagl,
} from '../models/app.model';

export const toneLangFuncMap = {
  [Language.ENGLISH]: {
    [LetterTone.FORMAL]: composeFormalLetterEnglish,
    [LetterTone.CASUAL]: composeCasualLetterEnglish,
    [LetterTone.CHILL]: composeChillLetterEnglish,
  },
  [Language.HEBREW]: {
    [LetterTone.FORMAL]: composeFormalLetterHebrew,
    [LetterTone.CASUAL]: composeCasualLetterHebrew,
    [LetterTone.CHILL]: composeChillLetterHebrew,
  },
};

export function composeFormalLetterEnglish(
  { company, lob, roles, firstName, lastName, email, linkedIn }: Yagl,
  { amount, unit }: Period
): string {
  return `Dear colleagues,

  After ${amount} ${unit}${
    amount > 1 ? 's' : ''
  } at ${company}, I have decided to move on to my next challenge.

  As ${roles} in quite a few projects${composeLobPhrase({
    lang: Language.ENGLISH,
    tone: LetterTone.FORMAL,
    lob,
  })}, I met a lot of good people in this organization and I am thankful for that.

  In this incredible journey, we've experienced together successes and failures, but we always kept moving forward.
  As Winston Churchill said: "Success is not final, failure is not fatal: it is the courage to continue that counts".

  Sincerely,
  
  ${firstName} ${lastName}
  ${email}
  ${linkedIn ?? ''}
  `;
}

export function composeCasualLetterEnglish(
  { firstName, phone, email, linkedIn, company, lob, lastDay }: Yagl,
  { amount, unit }: Period
): string {
  return `Hello everyone!
  
  ${amount} ${unit}${
    amount > 1 ? 's have' : ' has'
  } passed and it's time for me to go.

  It's been a pleasure working with you guys here at ${company}.
  I'll miss our coffee breaks, the happy hours and the PlayStation games...
  ${composeLobPhrase({ lang: Language.ENGLISH, tone: LetterTone.CASUAL, lob })}
  Hope to stay in touch, you can reach me by phone, email or however you'd like to.
  If we haven't connected yet via LinkedIn you're welcome to look for me.

  My last day in the office will be ${lastDay}, I'll be organizing a small farewell with some snacks, come and join!

  Yours,

  ${firstName}
  
  ${email}
  ${phone}
  ${linkedIn ?? ''}
  `;
}

export function composeChillLetterEnglish(
  { firstName, phone, email, linkedIn, company, lob, lastDay }: Yagl,
  { amount, unit }: Period
): string {
  return `Yo, what's up bro/sis??!

  Yeah it's true, I'm leaving ${company}... 🙈🙉🙊
  ${amount} ${unit}${amount > 1 ? 's' : ''}, but who counts..?

  I know you'll miss me..! 😁
  I'm gonna pass by the office on ${lastDay}, see ya there.
  
  Be in touch,${composeLobPhrase({
    lang: Language.ENGLISH,
    tone: LetterTone.CHILL,
    lob,
  })} love you guys!

  💙

  ${firstName}

  ${phone}
  ${email}
  ${linkedIn ?? ''}
  `;
}

export function composeFormalLetterHebrew(
  { company, lob, roles, firstName, lastName, email, linkedIn }: Yagl,
  period: Period
): string {
  return `עמיתים יקרים,

  אחרי ${transformHebrewPeriod(
    period
  )} ב-${company}, החלטתי לעבור לאתגר הבא שלי.

  בתור ${roles} בלא מעט פרויקטים${composeLobPhrase({
    lang: Language.HEBREW,
    tone: LetterTone.FORMAL,
    lob,
  })}, פגשתי הרבה אנשים טובים בארגון הזה ואני אסיר תודה על כך, היה לי לעונג לעבוד לצידכם.

  במסע המדהים הזה, חווינו יחד הצלחות וכישלונות, אבל תמיד המשכנו הלאה.
  כדבריו של וינסטון צ'רצ'יל: "ההצלחה אינה סופית, הכישלון אינו קטלני: האומץ להמשיך הוא שקובע".

  בברכה,
 
  ${firstName} ${lastName}
  ${email}
  ${linkedIn ?? ''}`;
}

export function composeCasualLetterHebrew(
  { firstName, phone, email, linkedIn, company, lob, lastDay }: Yagl,
  period: Period
): string {
  return `הי לכולם!
  
  ${transformHebrewPeriod(period)} ${spellHebrewPassed(period)} וגם זמני הגיע.

  היה תענוג לעבוד איתכם כאן ב-${company}.
  אני אתגעגע להפסקות הקפה שלנו, ל-Happy Hours ולמשחקי הפלייסטיישן...
  ${composeLobPhrase({ lang: Language.HEBREW, tone: LetterTone.CASUAL, lob })}
  שמרו על קשר, מוזמנים לדבר איתי בטלפון, במייל או איך שבא לכם.
  אם אנחנו עדיין לא חברים בלינקדאין אתם מוזמנים לחפש אותי שם.

  היום האחרון שלי במשרד יהיה יום ${lastDay}, נארגן פריסה קטנה עם קצת חטיפים, אשמח שתצטרפו!

  שלכם,

  ${firstName}
 
  ${email}
  ${phone}
  ${linkedIn ?? ''}`;
}

export function composeChillLetterHebrew(
  { firstName, phone, email, linkedIn, company, lob, lastDay }: Yagl,
  period: Period
): string {
  return `מה ניש אחים יקרים שלי??!

  וואלה שמעתם נכון, אני עוזב את ${company}... 🙈🙉🙊
  ${transformHebrewPeriod(period)}, אבל מי סופר..?

  אני יודע שתתגעגעו אליי..! 😁
  אני אקפוץ למשרד ביום ${lastDay} להגיד שלום.

  יאללה תהיו בקשר נשמות,${composeLobPhrase({
    lang: Language.HEBREW,
    tone: LetterTone.CHILL,
    lob,
  })} אוהב אתכם!

  💙

  ${firstName}

  ${phone}
  ${email}
  ${linkedIn ?? ''}`;
}

function composeLobPhrase({
  lang,
  tone,
  lob,
}: {
  lang: Language;
  tone: LetterTone;
  lob?: string;
}): string {
  if (!lob) {
    return '';
  }

  const lobList = lob?.split(',');
  const isEnglish = lang === Language.ENGLISH;

  if (tone === LetterTone.FORMAL) {
    if (lobList.length === 1) {
      return isEnglish ? ` in the ${lob} department` : ` בחטיבת ${lob}`;
    } else {
      return isEnglish
        ? ` in ${lobList.length} different departments`
        : ` ב-${lobList.length} חטיבות שונות`;
    }
  }

  const firstLob = lobList[0];

  if (firstLob) {
    if (tone === LetterTone.CASUAL) {
      return isEnglish
        ? `A special thanks to ${firstLob} folks.
        `
        : `תודה מיוחדת לחבר'ה מ-${firstLob}.
        `;
    } else if (tone === LetterTone.CHILL) {
      return isEnglish ? ` ${firstLob} rocks 🤘!` : ` אין על ${firstLob} 🤘!`;
    }
  }

  return '';
}

function transformHebrewPeriod({ amount, unit }: Period): string {
  if (amount > 2) {
    return `${amount} ${unit}`;
  }

  const key = amount === 1 ? 'single' : 'double';
  return HebrewTimeUnitsMap[key][unit as HebrewTimeUnit];
}

function spellHebrewPassed({ amount, unit }: Period): string {
  if (amount === 1) {
    return unit === 'שנים' ? 'חלפה' : 'חלף';
  }

  return 'חלפו';
}
