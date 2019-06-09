/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import util from './util';
import css from './AudioPlayer.module.css';

class AudioPlayer extends React.PureComponent {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    // label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    const audio = new Audio();

    audio.type = props.type;
    audio.lang = props.lang;
    audio.preload = 'auto';

    this.audio = audio;
    this.progress = React.createRef();
    this.passed = React.createRef();

    this.state = {
      isDisabled: true,
    };
  }

  componentDidMount() {
    const { url } = this.props;
    const time = util.getCurrentTime();
    const passed = this.passed.current;

    this.audio.src = url;

    this.audio.addEventListener('loadedmetadata', () => {
      this.audio.volume = util.getVolume();
      this.audio.currentTime = time;
      this.setState({ isDisabled: false });
    });

    this.audio.addEventListener('timeupdate', ({ target }) => {
      passed.style.width = `${this.calculatePass(target)}%`;
    });
  }

  componentWillUnmount() {
    this.audio.pause();
    this.audio = null;
  }

  toggleSound = () => {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  };

  calculatePass({ duration, currentTime }) {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  }

  handleChangeTime = (event) => {
    const { clientX } = event;
    const { offsetWidth, offsetLeft } = this.progress.current;
    const passTime = (Math.abs(clientX - offsetLeft) / offsetWidth) * 100;

    this.audio.currentTime = (this.audio.duration / 100) * passTime;
    this.passed.current.style.width = `${passTime}%`;
  }

  render() {
    const { isDisabled } = this.state;

    return (
      <fieldset
        disabled={isDisabled}
        className={css.player}
      >
        <button
          type="button"
          onClick={this.toggleSound}
        >
          play
        </button>
        <div
          ref={this.progress}
          className={css.progress}
          onClick={this.handleChangeTime}
        >
          <div
            ref={this.passed}
            className={css.passed}
          />
        </div>
      </fieldset>
    );
  }
}

export default AudioPlayer;
