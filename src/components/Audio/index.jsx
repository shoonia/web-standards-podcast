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

    this.state = {
      isDisabled: true,
    };
  }

  componentDidMount() {
    const { url } = this.props;
    const time = util.getCurrentTime();
    const progress = this.progress.current;

    this.audio.src = url;

    this.audio.addEventListener('loadedmetadata', () => {
      this.audio.volume = util.getVolume();
      this.audio.currentTime = time;
      this.setState({ isDisabled: false });
    });

    this.audio.addEventListener('durationchange', (event) => {
      progress.max = Math.round(event.target.duration);
    });

    this.audio.addEventListener('timeupdate', (event) => {
      progress.value = Math.round(event.target.currentTime);
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

  changeTime = (event) => {
    this.audio.currentTime = event.target.value;
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
        <div>
          <input
            type="range"
            ref={this.progress}
            className={css.progress}
            onInput={this.changeTime}
            min="0"
            step="1"
          />
        </div>
      </fieldset>
    );
  }
}

export default AudioPlayer;
