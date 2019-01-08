/**
 * Formats integer to human readable filesize
 *
 * @param {int} bytes
 * @param {int} decimalPoint
 */
export const formatFilesize = (bytes, decimalPoint) => {
  if (bytes === undefined) throw new Error('Bytes are required');
  if (bytes < 0) throw new Error('Negative bytes not allowed');
  if (bytes >= 10 ** 27)
    throw new Error(`Bytes too large, must be < 10 ** 27 (${10 ** 27})`);

  if (bytes === 0) return '0 Bytes';

  const k = 1000;
  const dm = decimalPoint || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  const sizeToReturn = `${parseFloat((bytes / k ** i).toFixed(dm))} ${
    sizes[i]
  }`;
  return sizeToReturn;
};
