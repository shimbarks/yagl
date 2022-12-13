import { LetterTone } from '../models/app.model';
import { Language } from './lang.model';

export const langData = {
  [Language.ENGLISH]: {
    otherLang: 'עברית',
    heading: 'yet another goodbye letter',
    description: `Fill the form or use the code editor with the yagl language to insert the details about your work at the company.
    
    Yagl has only a few rules:
    1. The only special characters are 👋 and 💌.
    2. 💌 separates between key-value pairs while 👋 separates between a key and a value.
    3. Leading and trailing white spaces are ignored.
    4. Keys that don't appear in the form are ignored.
    
    After you filled the form or wrote the yagl code, click to generate your personal goodbye letter.
    You can choose one of three different flavours to your letter.
    
    You can also edit the generated content as you wish, and then copy it to the clipboard or send it right away by email!`,
    form: {
      contactInfo: 'contact info',
      workHistory: 'work history',
      firstName: 'first name',
      lastName: 'last name',
      phone: 'phone number',
      email: 'email',
      linkedIn: 'LinkedIn URL (optional)',
      company: 'company name',
      roles: 'role/s',
      rolesPlaceholder: 'e.g. designer, developer',
      startDate: 'working start date',
      endDate: 'working end date',
      lastDay: 'last day at office',
    },
    actions: {
      generateLetter: 'generate letter',
      restart: 'restart',
      copyToClipboard: 'Copy to clipboard',
      sendByEmail: 'Send by email',
    },
    tones: {
      [LetterTone.FORMAL]: 'formal',
      [LetterTone.CASUAL]: 'casual',
      [LetterTone.CHILL]: 'chill',
    },
  },
  [Language.HEBREW]: {
    otherLang: 'english',
    heading: 'יֵט אָנַּזֶר גוּדְבָּיי לֶטֶּר',
    description: `מלא את הטופס או השתמש בעורך הקוד עם שפת יגל (yagl) כדי להזין את הפרטים על עבודתך בחברה.

    ליגל יש רק כמה כללים:
    1. התווים המיוחדים היחידים הם 👋 ו 💌.
    2. 💌 מפריד בין צמדים שונים של key-value בעוד ש-👋 מפריד בין key לבין ה-value שלו.
    3. אין התייחסות לרווחים מיותרים בתחילת מילה או בסופה.
    4. אין התייחסות לצמדי key-value שאינם מופיעים בטופס.
    
    לאחר שמילאת את הטופס או כתבת את הקוד, לחץ על הכפתור למטה כדי ליצור את מכתב הפרידה האישי שלך.
    אתה יכול לבחור אחד משלושה סגנונות שונים למכתב שלך.
    
    אתה יכול גם לערוך את התוכן שנוצר כרצונך, ולאחר מכן להעתיק אותו או לשלוח אותו מיד בדוא"ל!`,
    form: {
      contactInfo: 'פרטי התקשרות',
      workHistory: 'קצת על תפקידי בחברה',
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      phone: 'נייד',
      email: 'דואר אלקטרוני',
      linkedIn: 'קישור ל-LinkedIn (רשות)',
      company: 'שם החברה',
      roles: 'תפקיד/ים',
      rolesPlaceholder: 'לדוגמה: מעצב, מפתח',
      startDate: 'תחילת העסקה',
      endDate: 'סיום העסקה',
      lastDay: 'יום אחרון במשרד',
    },
    actions: {
      generateLetter: 'צור מכתב פרידה',
      restart: 'התחל מחדש',
      copyToClipboard: 'העתק',
      sendByEmail: 'שלח באמצעות דואר אלקטרוני',
    },
    tones: {
      [LetterTone.FORMAL]: 'רשמי',
      [LetterTone.CASUAL]: 'סאחי',
      [LetterTone.CHILL]: 'סטלן',
    },
  },
};

export const WeekDays = {
  [Language.ENGLISH]: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  [Language.HEBREW]: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
};
