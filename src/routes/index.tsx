import { TransactionPage } from '@src/pages/TransactionPage';
import { UploadPage } from '@src/pages/UploadPage';
import { Route, Routes } from 'react-router-dom';

export default function Routers() {
  return (
    <Routes>
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/transactions" element={<TransactionPage />} />
    </Routes>
  );
}
