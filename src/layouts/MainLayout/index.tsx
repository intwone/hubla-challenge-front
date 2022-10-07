import { Header } from '@src/components/Header';
import { MainLayoutPropsProtocol } from './types';

export function MainLayoult({ children }: MainLayoutPropsProtocol) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
