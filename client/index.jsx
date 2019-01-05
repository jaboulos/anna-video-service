import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import VideoPlayer from './VideoPlayer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      users: {},
      videos: [],
      video: {}
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <VideoPlayer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('videomodule'));