/* eslint-disable no-restricted-globals */
export default {
  getVolume() {
    const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)volume\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const volume = parseFloat(cookie, 10);

    return isNaN(volume) ? 0.5 : volume;
  },

  setVolume(volume) {
    document.cookie = `volume=${volume};path=/;max-age=${60 * 60 * 24 * 365}`;
  },

  getCurrentTime() {
    const val = document.location.hash.slice(1);
    const time = parseInt(val, 10);

    return isNaN(time) ? 0 : time;
  },
};
