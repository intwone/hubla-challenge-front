import theme from '@src/theme';
import { Link, useLocation } from 'react-router-dom';
import { Container, Topics } from './style';

export function Header() {
  const { pathname } = useLocation();
  const isSelectedUploadPage = pathname.includes('upload');
  const isSelectedTransactionsPage = pathname.includes('transactions');

  return (
    <>
      <Container>
        <div>
          <h1>
            HUBLA <span>&bull;</span>
          </h1>
        </div>

        <Topics>
          <Link
            style={{
              color: isSelectedUploadPage
                ? theme.colors.main
                : theme.colors.gray[700],
            }}
            to="/upload"
          >
            Upload
          </Link>
          <Link
            style={{
              color: isSelectedTransactionsPage
                ? theme.colors.main
                : theme.colors.gray[700],
            }}
            to="/transactions"
          >
            Transações
          </Link>
        </Topics>
      </Container>
    </>
  );
}
