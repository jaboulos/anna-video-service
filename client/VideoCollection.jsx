import React from 'react';

const VideoCollection = (props) => (
  <div className="preview-card">
    {props.videos.map((video) => {
      return (
        <li>
          <img src={video.thumbnail_url}/>
          <div>{video.title}</div>
          <div>{video.user_name}</div>
          <div>Game title goes here</div>
          <div>Duration: {video.duration}</div>
        </li>
      );
    })}
  </div>
);

export default VideoCollection;