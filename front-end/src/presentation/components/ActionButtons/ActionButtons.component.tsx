import { Button } from '..';
import { Container } from './ActionButtons.styles';
import { IActionButtonsProps } from './ActionButtons.types';

export function ActionButtons({
  actionButtonsArray
}: IActionButtonsProps): JSX.Element {
  return (
    <Container>
      {actionButtonsArray.map((value, index) => (
        <Button
          key={index}
          icon={value.icon}
          type={value.type}
          onClick={value.onClick}
          customButton={value.customButton}
        >
          {value.children}
        </Button>
      ))}
    </Container>
  );
}
