import theme from '@src/theme';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { IoMdCloudUpload } from 'react-icons/io';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { insertTransactionsFileRequest } from '../../services/insert-transation-file-request';
import { DropzoneContentMessage } from '../DropzoneContentMessage';
import { FileUploaded } from '../FileUploaded';
import {
  Container,
  Divider,
  DropzoneContainer,
  FileUploadedContainer,
  Footer,
  RemoveTransactionContainer,
  TitleContainer,
} from './style';
import { FilePropsProtocol } from './types';

export function UploadFile() {
  const [file, setFile] = useState<FilePropsProtocol | File | null>(null);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onDrop = useCallback((acceptedFile: any) => {
    if (!acceptedFile.length) return toast.error('Arquivo não suportado.');
    return setFile(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        'text/plain': ['.txt'],
      },
    });

  function iconColor() {
    if (!isDragActive) return theme.colors.main;
    if (isDragReject) return theme.colors.error;
    return theme.colors.success;
  }

  async function onSubmit() {
    try {
      if (!file) return;
      await insertTransactionsFileRequest(file);
      toast.success('Transações salvas com sucesso.');
      setFile(null);
    } catch {
      toast.error('Ocorreu um erro ao salvar o arquivo.');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <TitleContainer>
          <h2>Upload de arquivo</h2>
          <Divider />
        </TitleContainer>

        <div>
          <span className="info-message">
            Arraste e solte o seu arquivo aqui
          </span>
          <DropzoneContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input data-testid="upload-file" {...getInputProps()} />
            <IoMdCloudUpload size={70} color={iconColor()} />
            <DropzoneContentMessage
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            />
          </DropzoneContainer>
        </div>

        {!!file && (
          <FileUploadedContainer>
            <FileUploaded name={file.name} size={file.size} />
            <RemoveTransactionContainer onClick={() => setFile(null)}>
              <button type="submit">Excluir</button>
            </RemoveTransactionContainer>
          </FileUploadedContainer>
        )}

        <Footer disabled={isSubmitting || !file}>
          <button data-testid="send-file" type="submit">
            {isSubmitting ? (
              <ReactLoading type="spin" height={20} width={20} />
            ) : (
              'Enviar'
            )}
          </button>
        </Footer>
      </Container>
    </form>
  );
}
