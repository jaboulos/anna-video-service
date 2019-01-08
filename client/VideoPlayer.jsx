import React from 'react';

const VideoPlayer = (props) => {
  console.log('video:', props);
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item"
          src={'https://player.twitch.tv/?video=v' + props.video.id}
          height="720"
          width="1280"
          frameBorder="5"
          scrolling="no"
          allowFullScreen="true">
        </iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.video.title}</h3>
        <div>{props.video.user_name}</div>
        <div>Views: {props.video.view_count}</div>
      </div>
    </div>
  );
};

export default VideoPlayer;