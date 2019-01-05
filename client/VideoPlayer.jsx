import React from 'react';

const VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"
        src="https://player.twitch.tv/?video=v350462971&autoplay=false"
        height="720"
        width="1280"
        frameborder="5"
        scrolling="no"
        allowfullscreen="true">
      </iframe>
    </div>
    <div className="video-player-details">
      <h3>404Head NOT FOUND</h3>
      <div>Description goes here</div>
    </div>
  </div>
);

export default VideoPlayer;