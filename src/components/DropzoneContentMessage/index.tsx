import { Paragraph } from '../UploadFile/style';
import { Container } from './style';
import DropzoneContentMessageProps from './types';

export function DropzoneContentMessage({
  isDragActive,
  isDragReject,
}: DropzoneContentMessageProps) {
  if (!isDragActive) {
    return (
      <Container>
        <p>
          Você também pode selecionar o arquivo clicando na{' '}
          <span>área tracejada</span>.
        </p>

        <div>
          <p>
            <strong>Observação</strong>: Apenas arquivos com a extensão{' '}
            <strong>.txt</strong> são suportados.
          </p>
        </div>
      </Container>
    );
  }

  if (isDragReject) {
    return (
      <Paragraph>
        Arquivo não suportado, por favor, selecione um arquivo com a extensão
        .txt
      </Paragraph>
    );
  }

  return (
    <Paragraph>Arquivo válido, por favor, solte o arquivo aqui.</Paragraph>
  );
}
