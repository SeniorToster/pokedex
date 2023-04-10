export const validationUrl = url => url.match(/\/\d+/gm)[0].replace('/', '');
export const validationOffset = url =>
  url.match(/offset=\d+/gm)[0].split('=')[1];
