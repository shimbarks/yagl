import { LetterTone } from '../models/app.model';
import { Language } from './lang.model';

export const langData = {
  [Language.ENGLISH]: {
    otherLang: 'עברית',
    heading: 'yet another goodbye letter',
    form: {
      contactInfo: 'contact info',
      workHistory: 'work history',
      firstName: 'first name',
      lastName: 'last name',
      phone: 'phone number',
      email: 'email',
      linkedIn: 'LinkedIn URL (optional)',
      company: 'company name',
      roles: 'role/s (optional)',
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
      [LetterTone.FUNNY]: 'funny',
    },
  },
  [Language.HEBREW]: {
    otherLang: 'english',
    heading: 'יֵט אָנַּזֶר גוּדְבָּיי לֶטֶּר',
    form: {
      contactInfo: 'פרטי התקשרות',
      workHistory: 'קצת על תפקידי בחברה',
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      phone: 'נייד',
      email: 'דואר אלקטרוני',
      linkedIn: 'קישור ל-LinkedIn (רשות)',
      company: 'שם החברה',
      roles: 'תפקיד/ים (רשות)',
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
      [LetterTone.FUNNY]: 'סטלן',
    },
  },
};
