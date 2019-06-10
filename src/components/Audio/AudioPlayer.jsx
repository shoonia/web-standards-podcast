/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import util from './util';
import css from './AudioPlayer.module.css';

class AudioPlayer extends React.PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    const audio = new Audio();

    audio.type = props.type;
    audio.preload = 'auto';

    this.audio = audio;
    this.progress = React.createRef();
    this.passed = React.createRef();
    this.volume = React.createRef();

    this.state = {
      isDisabled: true,
    };
  }

  componentDidMount() {
    const { url } = this.props;
    const time = util.getCurrentTime();
    const volume = util.getVolume();
    const passed = this.passed.current;

    this.audio.src = url;

    this.audio.addEventListener('loadedmetadata', () => {
      this.audio.volume = volume;
      this.audio.currentTime = time;
      this.volume.current.value = volume;
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

  handleMuted = () => {
    this.audio.muted = !this.audio.muted;
  }

  handleChangeVolume = ({ target }) => {
    this.audio.volume = parseFloat(target.value);
    util.setVolume(target.value);
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
        <button
          type="button"
          onClick={this.handleMuted}
        >
          muted
        </button>
        <input
          ref={this.volume}
          onInput={this.handleChangeVolume}
          className={css.volume}
          type="range"
          max="1"
          min="0"
          step="0.001"
        />
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
