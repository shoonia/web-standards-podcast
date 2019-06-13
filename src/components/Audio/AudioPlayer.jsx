/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import util from './util';
import css from './AudioPlayer.module.css';
import Speaker from '../Icons/Speaker';

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
    this.timeout = null;

    this.progressRef = React.createRef();
    this.passedRef = React.createRef();
    this.volumeRef = React.createRef();

    this.state = {
      isDisabled: true,
      volume: util.getVolume(),
    };
  }

  componentDidMount() {
    const { url } = this.props;
    const { volume } = this.state;
    const time = util.getCurrentTime();
    const passed = this.passedRef.current.style;

    this.audio.src = url;

    this.audio.addEventListener('loadedmetadata', () => {
      this.audio.volume = volume;
      this.audio.currentTime = time;
      this.volumeRef.current.value = volume;
      this.setState({ isDisabled: false });
    });

    this.audio.addEventListener('timeupdate', ({ target }) => {
      passed.width = `${this.calculatePass(target)}%`;
    });
  }

  componentWillUnmount() {
    this.audio.pause();
    this.audio = null;
    clearTimeout(this.timeout);
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
    const { offsetWidth, offsetLeft } = this.progressRef.current;
    const passTime = (Math.abs(clientX - offsetLeft) / offsetWidth) * 100;

    this.audio.currentTime = (this.audio.duration / 100) * passTime;
    this.passedRef.current.style.width = `${passTime}%`;
  }

  handleMuted = () => {
    const muted = !this.audio.muted;

    this.audio.muted = muted;

    this.setState({
      volume: muted ? 0 : this.audio.volume,
    });
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
    const { isDisabled, volume } = this.state;

    return (
      <fieldset
        disabled={isDisabled}
        className={css.player}
      >
        <div>
          <button
            type="button"
            onClick={this.toggleSound}
            className={css.button}
          >
            Play
          </button>
          <button
            type="button"
            onClick={this.handleMuted}
            className={css.button}
          >
            <Speaker volume={volume} />
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
