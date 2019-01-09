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
      user: null,
      games: null,
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
      }).then(() => {
        axios.get('http://127.0.0.1:3049/api/users')
          .then((result) => {
            this.setState({
              isLoaded: true,
              user: result.data[0],
            });
          }, (error) => {
            console.log('Error retrieving user: ', error);
            this.setState({
              isLoaded: true,
              error
            });
          });
      }).then(()=> {
        axios.get('http://127.0.0.1:3049/api/games')
          .then((result) => {
            this.setState({
              isLoaded: true,
              games: result.data,
            });
          }, (error) => {
            console.log('Error retrieving games: ', error);
            this.setState({
              isLoaded: true,
              error
            });
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
            {this.state.games && (
              <Route exact={true} path="/" render={() => (
                <div className="preview-card">
                  {this.state.videos.map((video) => {
                    return (
                      <li>
                        <Link to={`videos/${video.id}`}>
                          <img src={video.thumbnail_url}/>
                          <div>{video.title}</div>
                        </Link>
                        <div><img src={this.state.games[0].box_art_url} /></div>
                        <div>{video.user_name}</div>
                        <div className="video-length">Duration: {video.duration}</div>
                        <div className="video-views">{video.view_count} views</div>
                      </li>
                    );
                  })}
                </div>
              )}/>)}
            {this.state.videos && (
              <Route path='/videos/:videoId' render={({match}) => (
                <VideoPlayer video={this.state.videos.find(video => video.id.toString() === match.params.videoId )} game={this.state.games[0]}/>
              )}/>
            )}
          </div>
        </Router>
      );
    }
  }
}


ReactDOM.render(<App />, document.getElementById('videomodule'));