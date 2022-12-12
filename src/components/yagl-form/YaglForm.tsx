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
      />
      <FormField
        {...register('lastName')}
        error={errors.lastName}
        label="last name"
      />
      <FormField
        {...register('phone')}
        error={errors.phone}
        label="phone number"
      />
      <FormField {...register('email')} error={errors.email} />
      <FormField
        {...register('roles')}
        error={errors.roles}
        label="roles at the company"
        pleaceholder="e.g. UI/UX designer, developer, team lead"
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
    </>
  );
};
