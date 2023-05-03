import ReactModal from 'react-modal';
import { IModalProps } from './Modal.types';
import { ActionButtons, Button } from '..';
import { Container, FooterButtons, FormContainer, Title } from './Modal.styles';
import { IButtonProps } from '../Button/Button.types';

export function Modal({
  isOpen,
  onClose,
  children,
  onSubmit = undefined,
  title,
  contentAboveForm,
  customForm = false
}: IModalProps): JSX.Element {
  const actionButtons: IButtonProps[] = [
    {
      children: 'Salvar',
      type: 'submit'
    },
    {
      children: 'Fechar',
      type: 'button',
      customButton: { backgroundColor: 'danger', color: 'white' },
      onClick: () => onClose()
    }
  ];

  return (
    <ReactModal isOpen={isOpen} ariaHideApp={false}>
      <Title>
        <h2>{title}</h2>
      </Title>

      {contentAboveForm ? <>{contentAboveForm}</> : ''}

      {onSubmit && !customForm ? (
        <form onSubmit={onSubmit}>
          <FormContainer>{children}</FormContainer>

          <FooterButtons>
            <ActionButtons actionButtonsArray={actionButtons} />
          </FooterButtons>
        </form>
      ) : customForm ? (
        <form onSubmit={onSubmit}>{children}</form>
      ) : (
        <>
          <Container>{children}</Container>

          <FooterButtons>
            <Button
              onClick={onClose}
              customButton={{
                backgroundColor: 'danger',
                color: 'white'
              }}
            >
              Fechar
            </Button>
          </FooterButtons>
        </>
      )}
    </ReactModal>
  );
}
