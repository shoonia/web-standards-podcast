import React from 'react';
import T from 'prop-types';

import util from './util';
import css from './AudioPlayer.module.css';
import Speaker from '../Icons/Speaker';
import Play from '../Icons/Play';

class AudioPlayer extends React.PureComponent {
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
      isPaused: false,
      isMuted: false,
      volume: util.getVolume(),
    };
  }

  componentDidMount() {
    const { audio } = this;
    const { url, duration } = this.props;
    const { volume } = this.state;
    const time = util.getCurrentTime();
    const progress = this.progressRef.current;
    const passed = this.passedRef.current.style;
    const timer = this.timerRef.current;

    audio.src = url;
    timer.value = duration;
    this.volumeRef.current.value = volume;

    audio.addEventListener('loadedmetadata', () => {
      audio.volume = volume;
      audio.currentTime = time;
    });

    audio.addEventListener('timeupdate', () => {
      const sec = Math.ceil(audio.duration - audio.currentTime);

      timer.value = util.remainingTime(sec);
      passed.width = `${util.calculatePass(audio)}%`;
    });

    audio.addEventListener('ended', () => {
      passed.width = '0';
      timer.value = duration;
      this.setState({ isPaused: false });
    });

    progress.addEventListener('click', (event) => {
      const point = this.getPointPosition(event.clientX);

      audio.currentTime = (audio.duration / 100) * point;
      passed.width = `${point}%`;
    });

    progress.addEventListener('mousemove', (event) => {
      const point = this.getPointPosition(event.clientX);
      const sec = Math.round((audio.duration * point) / 100);
      const rt = util.remainingTime(sec);

      progress.setAttribute('title', rt);
    });

    progress.addEventListener('mouseout', () => {
      progress.setAttribute('title', '');
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

  getPointPosition = (clientX) => {
    const { offsetWidth, offsetLeft } = this.progressRef.current;
    return (Math.abs(clientX - offsetLeft) / offsetWidth) * 100;
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
    const { isPaused, isMuted, volume } = this.state;

    return (
      <div className={css.player}>
        <div className={css.controls}>
          <button
            type="button"
            onClick={this.toggleSound}
            className={css.button}
          >
            <Play isPaused={isPaused} />
          </button>
          <div className={css.muted}>
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
          </div>
        </div>
        <div className={css.controls}>
          <div
            ref={this.progressRef}
            className={css.progress}
          >
            <div
              ref={this.passedRef}
              className={css.passed}
            />
          </div>
          <output
            ref={this.timerRef}
            className={css.duration}
          />
        </div>
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  url: T.string.isRequired,
  type: T.string.isRequired,
  duration: T.string.isRequired,
};

export default AudioPlayer;
