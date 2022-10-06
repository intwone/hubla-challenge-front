import { UploadFile } from '@src/components/UploadFile';
import { MainLayoult } from '@src/layouts/MainLayout';
import { Container } from './style';

export function UploadPage() {
  return (
    <MainLayoult>
      <Container>
        <UploadFile />
      </Container>
    </MainLayoult>
  );
}
