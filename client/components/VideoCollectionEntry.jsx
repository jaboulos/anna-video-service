import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const VideoCollectionEntry = (props) => {
  return (
    <li>
      <div className="link-to-video">
        <Link to={`videos/${props.video.id}`}>
          <img src={props.video.thumbnail_url}/>
          <div className="video-title">{props.video.title}</div>
        </Link>
      </div>
      <div className="game-box-art"><img src={props.game.box_art_url} /></div>
      <div className="streamer-name">{props.video.user_name}</div>
      <div className="on-video">Duration: {props.video.duration}</div>
      <div className="on-video">{props.video.view_count} views</div>
      <div className="on-video">{moment(props.video.created_at).fromNow()}</div>
    </li>
  );
};

export default VideoCollectionEntry;