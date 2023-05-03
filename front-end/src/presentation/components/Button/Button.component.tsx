import { IButtonProps } from './Button.types';
import { Container } from './Button.styles';

export function Button({
  children,
  type = 'submit',
  onClick,
  customButton,
  icon
}: IButtonProps): JSX.Element {
  return (
    <Container type={type} onClick={onClick} customButton={customButton}>
      {icon && <>{icon}</>}
      {children}
    </Container>
  );
}
