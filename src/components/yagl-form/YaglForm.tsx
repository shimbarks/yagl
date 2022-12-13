import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { useI18n } from 'react-simple-i18n';
import { Yagl } from '../../models/app.model';
import { FormField } from '../form-field/FormField';
import './YaglForm.scss';

export interface YaglFormProps {
  register: UseFormRegister<Yagl>;
  errors: Partial<FieldErrorsImpl<Yagl>>;
}

export const YaglForm: React.FC<YaglFormProps> = ({ register, errors }) => {
  const { t } = useI18n();

  return (
    <>
      <fieldset>
        <legend>{t('form.workHistory')}</legend>
        <FormField
          {...register('company')}
          label={t('form.company')}
          error={errors.company}
          aria-required
        />
        <FormField
          {...register('lob')}
          label={t('form.lob')}
          error={errors.lob}
          pleaceholder="ET, Consumer, NetCom"
        />
        <FormField
          {...register('roles')}
          label={t('form.roles')}
          error={errors.roles}
          pleaceholder={t('form.rolesPlaceholder')}
        />
        <FormField
          {...register('startDate')}
          label={t('form.startDate')}
          error={errors.startDate}
          type="date"
          aria-required
        />
        <FormField
          {...register('lastDay')}
          label={t('form.lastDay')}
          error={errors.lastDay}
          type="date"
          aria-required
        />
      </fieldset>
      <fieldset>
        <legend>{t('form.contactInfo')}</legend>
        <FormField
          {...register('firstName')}
          label={t('form.firstName')}
          error={errors.firstName}
          aria-required
        />
        <FormField
          {...register('lastName')}
          label={t('form.lastName')}
          error={errors.lastName}
          aria-required
        />
        <FormField
          {...register('phone')}
          label={t('form.phone')}
          error={errors.phone}
          type="tel"
          aria-required
        />
        <FormField
          {...register('email')}
          label={t('form.email')}
          error={errors.email}
          type="email"
          aria-required
        />
        <FormField
          {...register('linkedIn')}
          label={t('form.linkedIn')}
          error={errors.linkedIn}
          type="url"
        />
      </fieldset>
    </>
  );
};
