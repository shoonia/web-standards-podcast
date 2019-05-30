/* eslint-disable no-restricted-globals */
const doc = document;

export default {
  getVolume() {
    const cookie = doc.cookie.replace(/(?:(?:^|.*;\s*)volume\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const volume = parseFloat(cookie, 10);

    return isNaN(volume) ? 0.5 : volume;
  },

  setVolume(volume) {
    doc.cookie = `volume=${volume};path=/;max-age=${60 * 60 * 24 * 365}`;
  },

  getCurrentTime() {
    const val = doc.location.hash.slice(1);
    const time = parseInt(val, 10);

    return isNaN(time) ? 0 : time;
  },
};
