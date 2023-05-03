import { Button, Loader } from '../../components';
import { Container, Table } from './Categories.styles';
import { useCategoriesPage } from './useCategoriesPage';
import { RiDeleteBin6Line } from 'react-icons/ri';

export function CategoriesPage(): JSX.Element {
  const { data, isLoading, deleteCategory } = useCategoriesPage();

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map(value => (
              <tr key={value.id}>
                <th>{value.id}</th>
                <th>{value.name}</th>
                <th>
                  <Button
                    icon={<RiDeleteBin6Line />}
                    customButton={{ backgroundColor: 'danger', color: 'white' }}
                    type='button'
                    onClick={deleteCategory(value.id)}
                  >
                    Apagar
                  </Button>
                </th>
              </tr>
            ))
          ) : (
            <tr>
              <th>Nenhuma categoria encontrada</th>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
