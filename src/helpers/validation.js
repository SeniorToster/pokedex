export const validationUrl = url => url.match(/\/\d+/gm)[0].replace('/', '');
