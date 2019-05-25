import React from 'react';
import PropTypes from 'prop-types';

class Audio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  componentDidMount() {
    this.audio.current.volume = 0.5;
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
        >
          <track
            kind="captions"
            src={url}
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

Audio.propTypes = {
  lang: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Audio;
