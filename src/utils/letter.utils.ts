import { Language } from '../lang/lang.model';
import { LetterTone, Period, Yagl } from '../models/app.model';

export const toneLangFuncMap = {
  [Language.ENGLISH]: {
    [LetterTone.FORMAL]: writeFormalLetterEnglish,
    [LetterTone.CASUAL]: writeCasualLetterEnglish,
    [LetterTone.FUNNY]: writeFunnyLetterEnglish,
  },
  [Language.HEBREW]: {
    [LetterTone.FORMAL]: writeFormalLetterHebrew,
    [LetterTone.CASUAL]: writeCasualLetterHebrew,
    [LetterTone.FUNNY]: writeFunnyLetterHebrew,
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
  yagl: Yagl,
  { amount, unit }: Period
): string {
  return ``;
}

export function writeFunnyLetterEnglish(
  yagl: Yagl,
  { amount, unit }: Period
): string {
  return ``;
}

export function writeFormalLetterHebrew(
  yagl: Yagl,
  { amount, unit }: Period
): string {
  return ``;
}

export function writeCasualLetterHebrew(
  yagl: Yagl,
  { amount, unit }: Period
): string {
  return ``;
}

export function writeFunnyLetterHebrew(
  yagl: Yagl,
  { amount, unit }: Period
): string {
  return ``;
}
