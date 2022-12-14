import { ForwardedRef, forwardRef, HTMLInputTypeAttribute, useId } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import './FormField.scss';

export interface FormFieldProps extends UseFormRegisterReturn {
  label?: string;
  type?: HTMLInputTypeAttribute;
  pleaceholder?: string;
  error?: FieldError;
}

const FormFieldComponent = (
  props: FormFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const id = useId();

  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {props.label ?? props.name}
      </label>
      <input
        {...props}
        ref={ref}
        id={id}
        className={'form-field__input'}
        type={props.type ?? 'text'}
        placeholder={props.pleaceholder}
      />
      <p className="form-field__error">{props.error?.message}</p>
    </div>
  );
};

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  FormFieldComponent
);
