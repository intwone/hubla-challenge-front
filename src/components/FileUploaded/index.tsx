import { AiOutlineFileText } from 'react-icons/ai';
import { FilePropsProtocol } from '../UploadFile/types';
import { Container, FileInfo } from './style';

export function FileUploaded({ name, size }: FilePropsProtocol) {
  const fileSizeInKiloBytes = `${size / 1000}kb`;

  return (
    <Container>
      <FileInfo>
        <AiOutlineFileText size={40} />
        <div>
          <span>{name}</span>
          <strong>{fileSizeInKiloBytes}</strong>
        </div>
      </FileInfo>
    </Container>
  );
}
