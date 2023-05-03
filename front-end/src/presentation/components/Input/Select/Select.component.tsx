import ReactSelect from 'react-select';
import { ISelectOption, ISelectProps } from './Select.types';
import { Controller } from 'react-hook-form';
import { Container } from './Select.styles';

export function Select({
  control,
  options,
  name,
  disabled = false,
  errorMessage = '',
  placeholder,
  onBlur
}: ISelectProps): JSX.Element {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <ReactSelect
            onBlur={onBlur}
            name='companyId'
            options={options}
            isDisabled={disabled}
            onChange={newValue => {
              const typedNewValue = newValue as ISelectOption;
              onChange(typedNewValue?.value ? typedNewValue.value : null);
            }}
            value={
              options.find(option => option.value === (value as string)) ?? null
            }
            classNamePrefix='react-select'
            placeholder={placeholder}
          />
        )}
      />

      {errorMessage !== '' && <label>{errorMessage}</label>}
    </Container>
  );
}
