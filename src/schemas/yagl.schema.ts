import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Yagl } from '../models/app.model';

export const yaglSchema: yup.SchemaOf<Yagl> = yup
  .object({
    firstName: yup.string().required('first name is required'),
    lastName: yup.string().required('last name is required'),
    roles: yup.string().required('at least one role is required'),
    startDate: yup.string().required('start date is required'),
    endDate: yup.string().required('end dater is required'),
    lastDay: yup.string().required('last day is required'),
  })
  .required();

export const yaglDefaultValues = yaglSchema.cast({}) as Yagl;

export const yaglResolver = yupResolver(yaglSchema);
