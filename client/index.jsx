import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import VideoPlayer from './VideoPlayer.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      users: [],
      games: [],
      videos: null
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3049/api/videos')
      .then((result) => {
        this.setState({
          isLoaded: true,
          videos: result.data,
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
        <Router>
          <div>
            <Route exact={true} path="/" render={() => (
              <div className="preview-card">
                {this.state.videos.map((video) => {
                  return (
                    <li>
                      <Link to={`videos/${video.id}`}>
                        <img src={video.thumbnail_url}/>
                        <div>{video.title}</div>
                      </Link>
                      <div>{video.user_name}</div>
                      <div>Game title goes here</div>
                      <div>Duration: {video.duration}</div>
                    </li>
                  );
                })}
              </div>
            )}/>
            {this.state.videos && (
              <Route path='/videos/:videoId' render={({match}) => (
                <VideoPlayer video={this.state.videos.find(video => video.id.toString() === match.params.videoId )}/>
              )}/>
            )}
          </div>
        </Router>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('videomodule'));