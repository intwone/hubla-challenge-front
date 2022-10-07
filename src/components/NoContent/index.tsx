import { TbMoodEmpty } from 'react-icons/tb';
import { Container } from './style';

export function NoContent() {
  return (
    <Container>
      <TbMoodEmpty size={50} />
      <p>Não há tem nenhuma transação cadastrada.</p>
    </Container>
  );
}
