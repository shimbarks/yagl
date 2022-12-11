import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
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
    startDate: yup.string().required('start date is required'),
    endDate: yup.string().required('end dater is required'),
    lastDay: yup.string().required('last day is required'),
  })
  .required();

export interface YaglFormProps {
  onSubmit: SubmitHandler<Yagl>;
  data?: Yagl;
}

export const YaglForm: React.FC<YaglFormProps> = ({ onSubmit, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Yagl>({
    defaultValues: schema.cast({}) as Yagl,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data) {
      const entries = Object.entries(data) as Entries<Yagl>;
      entries.forEach(([key, value]) => setValue(key, value));
    }
  }, [data]);

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
        pleaceholder="UI/UX designer, developer, team lead"
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
      <button type="submit" className="yagl-form__submit-button">
        generate letter
      </button>
    </form>
  );
};
