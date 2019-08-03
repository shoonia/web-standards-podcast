/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import util from './util';
import css from './AudioPlayer.module.css';
import Speaker from '../Icons/Speaker';
import Play from '../Icons/Play';

class AudioPlayer extends React.PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    const audio = new window.Audio();

    audio.type = props.type;
    audio.preload = 'auto';

    this.audio = audio;
    this.timeout = null;

    this.progressRef = React.createRef();
    this.passedRef = React.createRef();
    this.volumeRef = React.createRef();
    this.timerRef = React.createRef();

    this.state = {
      isDisabled: true,
      isPaused: false,
      isMuted: false,
      volume: util.getVolume(),
    };
  }

  componentDidMount() {
    const { url, duration } = this.props;
    const { volume } = this.state;
    const time = util.getCurrentTime();
    const passed = this.passedRef.current.style;
    const timer = this.timerRef.current;

    this.audio.src = url;
    this.volumeRef.current.value = volume;
    timer.value = duration;

    this.audio.addEventListener('loadedmetadata', () => {
      this.audio.volume = volume;
      this.audio.currentTime = time;
      this.setState({ isDisabled: false });
    });

    this.audio.addEventListener('timeupdate', ({ target }) => {
      timer.value = util.remainingTime(target);
      passed.width = `${util.calculatePass(target)}%`;
    });

    this.audio.addEventListener('ended', () => {
      passed.width = '0';
      timer.value = duration
      this.setState({ isPaused: false });
    });
  }

  componentWillUnmount() {
    this.audio.pause();
    this.audio = null;
    clearTimeout(this.timeout);
  }

  toggleSound = () => {
    const isPaused = this.audio.paused;

    if (isPaused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }

    this.setState({ isPaused });
  };

  handleChangeTime = (event) => {
    const { clientX } = event;
    const { offsetWidth, offsetLeft } = this.progressRef.current;
    const passTime = (Math.abs(clientX - offsetLeft) / offsetWidth) * 100;

    this.audio.currentTime = (this.audio.duration / 100) * passTime;
    this.passedRef.current.style.width = `${passTime}%`;
  }

  handleMuted = () => {
    const isMuted = !this.audio.muted;

    this.audio.muted = isMuted;
    this.setState({ isMuted });
  }

  handleInputVolume = ({ target }) => {
    const volume = parseFloat(target.value);

    this.audio.volume = volume;

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      util.setVolume(target.value);
      this.setState({ volume });
    }, 200);
  }

  render() {
    const {
      isDisabled,
      isPaused,
      isMuted,
      volume,
    } = this.state;

    return (
      <fieldset
        disabled={isDisabled}
        className={css.player}
      >
        <div className={css.controls}>
          <button
            type="button"
            onClick={this.toggleSound}
            className={css.button}
          >
            <Play isPaused={isPaused} />
          </button>
          <button
            type="button"
            onClick={this.handleMuted}
            className={css.button}
          >
            <Speaker
              volume={volume}
              isMuted={isMuted}
            />
          </button>
          <input
            ref={this.volumeRef}
            onInput={this.handleInputVolume}
            className={css.volume}
            type="range"
            max="1"
            min="0"
            step="0.001"
          />
          <output
            ref={this.timerRef}
            className={css.duration}
          />
        </div>
        <div
          ref={this.progressRef}
          className={css.progress}
          onClick={this.handleChangeTime}
        >
          <div
            ref={this.passedRef}
            className={css.passed}
          />
        </div>
      </fieldset>
    );
  }
}

export default AudioPlayer;
