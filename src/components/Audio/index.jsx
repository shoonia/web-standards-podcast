import React from 'react';
import PropTypes from 'prop-types';
import util from './util';

class Audio extends React.PureComponent {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  componentDidMount() {
    this.audio.current.volume = util.getVolume();
  }

  onVolumeChange = ({ target }) => {
    util.setVolume(target.volume);
  }

  onLoadedMetadata = () => {
    this.audio.current.currentTime = util.getCurrentTime();
  }

  render() {
    const {
      lang,
      label,
      url,
      type,
    } = this.props;

    return (
      <div>
        <audio
          ref={this.audio}
          controls
          preload="auto"
          onVolumeChange={this.onVolumeChange}
          onLoadedMetadata={this.onLoadedMetadata}
        >
          <track
            kind="captions"
            srcLang={lang}
            label={label}
            default
          />
          <source
            src={url}
            type={type}
          />
        </audio>
      </div>
    );
  }
}

export default Audio;
