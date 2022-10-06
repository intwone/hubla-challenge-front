import { Header } from '@src/components/Header';
import { MainLayoutProps } from './types';

export function MainLayoult({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
