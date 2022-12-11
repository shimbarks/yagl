import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { Yagl } from '../../models/app.model';
import { FormField } from '../form-field/FormField';
import './YaglForm.scss';

const schema: SchemaOf<Yagl> = yup
  .object({
    firstName: yup.string().required('first name is required'),
    lastName: yup.string().required('last name is required'),
    roles: yup.string().required('at least one role is required'),
    startDate: yup
      .date()
      .required('start date is required')
      .nullable()
      .default(null),
    endDate: yup
      .date()
      .required('end dater is required')
      .nullable()
      .default(null),
    lastDay: yup
      .date()
      .required('last day is required')
      .nullable()
      .default(null),
  })
  .required();

export interface YaglFormProps {
  onSubmit: SubmitHandler<Yagl>;
}

export const YaglForm: React.FC<YaglFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Yagl>({
    defaultValues: schema.cast({}) as Yagl,
    resolver: yupResolver(schema),
  });

  return (
    <form className="yagl-form" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        {...register('firstName')}
        error={errors.firstName}
        label="first name"
      />
      <FormField
        {...register('lastName')}
        error={errors.lastName}
        label=" last name"
      />
      <FormField
        {...register('roles')}
        error={errors.roles}
        label="roles at the company"
      />
      <FormField
        {...register('startDate')}
        error={errors.startDate}
        type="date"
        label="working start date"
      />
      <FormField
        {...register('endDate')}
        error={errors.endDate}
        type="date"
        label="working end date"
      />
      <FormField
        {...register('lastDay')}
        error={errors.lastDay}
        type="date"
        label="last day at office"
      />
      <button type="submit">generate letter</button>
    </form>
  );
};
