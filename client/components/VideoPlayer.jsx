import React from 'react';
import moment from 'moment';

const VideoPlayer = (props) => {
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item"
          src={'https://player.twitch.tv/?video=v' + props.video.id}
          height="650"
          width="1080"
          frameBorder="5"
          scrolling="no"
          allowFullScreen="true">
        </iframe>
      </div>
      <div className="video-player-details">
        <div><img src={props.game.box_art_url}/></div>
        <h3>{props.video.title} · {moment(props.video.created_at).fromNow()}</h3>
        <div>Category: {props.game.name}</div>
        <div>Views: {props.video.view_count}</div>
      </div>
    </div>
  );
};

export default VideoPlayer;