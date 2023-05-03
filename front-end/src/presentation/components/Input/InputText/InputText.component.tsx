import { Controller, FieldValues, Path, PathValue } from 'react-hook-form';
import {
  Container,
  ErrorMessage,
  IconWrapper,
  InputLabel,
  StyledInput
} from './InputText.styles';
import { IInputProps } from './InputText.types';
import { Mask } from '../../../../shared/utils';

export function InputText<T extends FieldValues>({
  name,
  control,
  defaultValue = '',
  mask = undefined,
  type = 'text',
  placeholder = '',
  errorMessage = '',
  icon,
  onBlur,
  disabled = false,
  showLabelAbove = true
}: IInputProps<T>): JSX.Element {
  return (
    <>
      <Container>
        <IconWrapper>
          {icon && <span>{icon}</span>}

          {showLabelAbove && (
            <InputLabel disabled={disabled}>{placeholder}</InputLabel>
          )}

          <Controller
            name={name as Path<T>}
            control={control}
            defaultValue={defaultValue as PathValue<T, Path<T>>}
            render={({ field: { onChange, value } }) => (
              <StyledInput
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                onChange={e => {
                  onChange(Mask.apply(mask, e.target.value));
                }}
                value={value}
                onBlur={onBlur}
              />
            )}
          />
        </IconWrapper>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Container>
    </>
  );
}
