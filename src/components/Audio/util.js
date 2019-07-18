/* eslint-disable no-restricted-globals */
const withZero = n => ((n < 10) ? `0${n}` : String(n));

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
    const val = /[?&]time=([\d]*)/.exec(window.location.search);
    const time = Array.isArray(val) ? parseInt(val[1], 10) : 0;

    return isNaN(time) ? 0 : time;
  },

  calculatePass({ duration, currentTime }) {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  },

  timeLeft(sec) {
    if (sec < 1) return '00:00:00';

    const H = Math.floor(sec / (60 * 60));
    const M = Math.floor((sec - H * 60 * 60) / 60);
    const S = Math.floor(sec - ((H * 60 + M) * 60));

    return `${withZero(H)}:${withZero(M)}:${withZero(S)}`;
  },
};
