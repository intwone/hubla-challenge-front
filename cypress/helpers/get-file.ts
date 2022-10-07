import path = require('path');

export function getFile(filename: string) {
  const filePath = path.resolve(__dirname, '..', 'docs', filename);
  return filePath;
}
