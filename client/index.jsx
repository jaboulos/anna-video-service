import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import VideoPlayer from './VideoPlayer.jsx';
import VideoCollection from './VideoCollection.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      users: [],
      videos: [],
      video: {}
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3049/api/videos')
      .then((result) => {
        console.log('See result: ', result);
        console.log('See Data? ', result.data);
        this.setState({
          isLoaded: true,
          videos: result.data,
          video: result.data[0]
        });
      }, (error) => {
        console.log('Error retrieving videos: ', error);
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  render() {
    if (this.state.error) {
      return (<div>Error...{this.state.error.message}</div>);
    } else if (this.state.isLoaded === false) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <VideoPlayer video={this.state.video}/>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('videomodule'));