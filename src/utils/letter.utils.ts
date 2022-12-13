import { Language } from '../lang/lang.model';
import { LetterTone, Period, Yagl } from '../models/app.model';

export const toneLangFuncMap = {
  [Language.ENGLISH]: {
    [LetterTone.FORMAL]: writeFormalLetterEnglish,
    [LetterTone.CASUAL]: writeCasualLetterEnglish,
    [LetterTone.CHILL]: writeChillLetterEnglish,
  },
  [Language.HEBREW]: {
    [LetterTone.FORMAL]: writeFormalLetterHebrew,
    [LetterTone.CASUAL]: writeCasualLetterHebrew,
    [LetterTone.CHILL]: writeChillLetterHebrew,
  },
};

export function writeFormalLetterEnglish(
  { company, roles, firstName, lastName, email, linkedIn }: Yagl,
  { amount, unit }: Period
): string {
  return `Dear colleagues,

  After ${amount} ${unit} at ${company}, I have decided to move on to my next challenge.

  As ${roles} in quite a few projects, I met a lot of good people in this organization and I am thankful for that.

  In this incredible journey, we've experienced together successes and failures, but we always kept moving forward.
  As Winston Churchill said: "Success is not final, failure is not fatal: it is the courage to continue that counts".

  Sincerely,
  
  ${firstName} ${lastName}
  ${email}
  ${linkedIn ?? ''}
  `;
}

export function writeCasualLetterEnglish(
  { firstName, phone, email, linkedIn, company, lastDay }: Yagl,
  { amount, unit }: Period
): string {
  return `Hello everyone!
  
  ${amount} ${unit} have passed and it's time for me to go.

  It's been a pleasure working with you guys here at ${company}.
  I'll miss our coffee breaks, the happy hours and the PlayStation games...

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

export function writeChillLetterEnglish(
  { firstName, phone, email, linkedIn, company, lastDay }: Yagl,
  { amount, unit }: Period
): string {
  return `Yo, what's up bro/sis??!

  Yeah it's true, I'm leaving ${company}... 🙈🙉🙊
  ${amount} ${unit}, but who counts..?

  I know you'll miss me..! 😁
  I'm gonna pass by the office on ${lastDay}, see ya there.
  
  Be in touch, love you guys!

  💙

  ${firstName}

  ${phone}
  ${email}
  ${linkedIn ?? ''}
  `;
}

export function writeFormalLetterHebrew(
  { company, roles, firstName, lastName, email, linkedIn }: Yagl,
  { amount, unit }: Period
): string {
  return `עמיתים יקרים,

  אחרי ${amount} ${unit} ב-${company}, החלטתי לעבור לאתגר הבא שלי.

  בתור ${roles} בלא מעט פרויקטים, פגשתי הרבה אנשים טובים בארגון הזה ואני אסיר תודה על כך, היה לי לעונג לעבוד לצידכם.

  במסע המדהים הזה, חווינו יחד הצלחות וכישלונות, אבל תמיד המשכנו הלאה.
  כדבריו של וינסטון צ'רצ'יל: "ההצלחה אינה סופית, הכישלון אינו קטלני: האומץ להמשיך הוא שקובע".

  בברכה,
 
  ${firstName} ${lastName}
  ${email}
  ${linkedIn ?? ''}`;
}

export function writeCasualLetterHebrew(
  { firstName, phone, email, linkedIn, company, lastDay }: Yagl,
  { amount, unit }: Period
): string {
  return `הי לכולם!
  
  ${amount} ${unit} חלפו וגם זמני הגיע.

  היה תענוג לעבוד איתכם כאן ב-${company}.
  אני אתגעגע להפסקות הקפה שלנו, ל-Happy Hours ולמשחקי הפלייסטיישן...

  שמרו על קשר, מוזמנים לדבר איתי בטלפון, במייל או איך שבא לכם.
  אם אנחנו עדיין לא חברים בלינקדאין אתם מוזמנים לחפש אותי שם.

  היום האחרון שלי במשרד יהיה יום ${lastDay}, נארגן פריסה קטנה עם קצת חטיפים, אשמח שתצטרפו!

  שלכם,

  ${firstName}
 
  ${email}
  ${phone}
  ${linkedIn ?? ''}`;
}

export function writeChillLetterHebrew(
  { firstName, phone, email, linkedIn, company, lastDay }: Yagl,
  { amount, unit }: Period
): string {
  return `מה ניש אחים יקרים שלי??!

  וואלה שמעתם נכון, אני עוזב את ${company}... 🙈🙉🙊
  ${amount} ${unit}, אבל מי סופר..?

  אני יודע שתתגעגעו אליי..! 😁
  אני אקפוץ למשרד ביום ${lastDay} להגיד שלום.

  יאללה תהיו בקשר נשמות, אוהב אתכם!

  💙

  ${firstName}

  ${phone}
  ${email}
  ${linkedIn ?? ''}`;
}
