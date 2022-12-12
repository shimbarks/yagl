import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Yagl } from '../models/app.model';

const phoneRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const yaglSchema: yup.SchemaOf<Yagl> = yup
  .object({
    firstName: yup.string().required('first name is required'),
    lastName: yup.string().required('last name is required'),
    phone: yup
      .string()
      .required('phone number is required')
      .matches(phoneRegExp, 'phone number is invalid'),
    email: yup.string().email().required(),
    linkedIn: yup.string().url(),
    company: yup.string().required().default('AT&T'),
    roles: yup.string(),
    startDate: yup.string().required('start date is required'),
    endDate: yup.string().required('end dater is required'),
    lastDay: yup.string().required('last day is required'),
  })
  .required();

export const yaglDefaultValues = yaglSchema.cast({}) as Yagl;

export const yaglResolver = yupResolver(yaglSchema);
