import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { Yagl } from '../../models/app.model';
import { FormField } from '../form-field/FormField';

export interface YaglFormProps {
  register: UseFormRegister<Yagl>;
  errors: Partial<FieldErrorsImpl<Yagl>>;
}

export const YaglForm: React.FC<YaglFormProps> = ({ register, errors }) => {
  return (
    <>
      <FormField
        {...register('firstName')}
        error={errors.firstName}
        label="first name"
        aria-required
      />
      <FormField
        {...register('lastName')}
        error={errors.lastName}
        label="last name"
        aria-required
      />
      <FormField
        {...register('phone')}
        error={errors.phone}
        label="phone number"
        type="tel"
        aria-required
      />
      <FormField
        {...register('email')}
        error={errors.email}
        type="email"
        aria-required
      />
      <FormField
        {...register('linkedIn')}
        error={errors.linkedIn}
        label="LinkedIn (optional)"
        type="url"
      />
      <FormField
        {...register('company')}
        error={errors.company}
        aria-required
      />
      <FormField
        {...register('roles')}
        error={errors.roles}
        label="roles at the company (optional)"
        pleaceholder="e.g. UI/UX designer, developer, team lead"
      />
      <FormField
        {...register('startDate')}
        error={errors.startDate}
        type="date"
        label="working start date"
        aria-required
      />
      <FormField
        {...register('endDate')}
        error={errors.endDate}
        type="date"
        label="working end date"
        aria-required
      />
      <FormField
        {...register('lastDay')}
        error={errors.lastDay}
        type="date"
        label="last day at office"
        aria-required
      />
    </>
  );
};
