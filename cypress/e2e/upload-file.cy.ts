import { getFile } from '../helpers/get-file';
import { toastSelectors } from '../selectors/toast';
import { uploadPageSelectors } from '../selectors/upload-page';

describe('Upload file', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Success', () => {
    it('should be able to upload file when file is valid', () => {
      cy.get(uploadPageSelectors.fileInput).attachFile({
        filePath: getFile('valid-file.txt'),
      });
      cy.get(uploadPageSelectors.sendFileButton).click();
      cy.get(toastSelectors.toastContainer).should(
        'contain.text',
        'Transações salvas com sucesso.',
      );
    });
  });

  describe('Fail', () => {
    it('should not be able to upload file when file is invalid', () => {
      cy.get(uploadPageSelectors.fileInput).attachFile({
        filePath: getFile('invalid-file.md'),
      });
      cy.get(toastSelectors.toastContainer).should(
        'contain.text',
        'Arquivo não suportado.',
      );
    });

    it('should not be able to upload file when file is not provided', () => {
      cy.get(uploadPageSelectors.sendFileButton).click();
      cy.get(toastSelectors.toastContainer).should('not.exist');
    });
  });
});
