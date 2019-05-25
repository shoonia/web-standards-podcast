/* eslint-disable no-restricted-globals */
export function getVolume() {
  const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)volume\s*=\s*([^;]*).*$)|^.*$/, '$1');
  const volume = parseFloat(cookie, 10);

  return isNaN(volume) ? 0.5 : volume;
}

export function setVolume(volume) {
  document.cookie = `volume=${volume};max-age=${60 * 60 * 24 * 365}`;
}
