export const keyChange = (string) => string.replace(/ +/g, '-').replace(/\.+/g, '_').toLowerCase();