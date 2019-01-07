import React from 'react';

const VideoCollection = (props) => {
  <div className="preview-card">
    {props.videos.map((video) => {
      return (
        <li>
          <div>{video.thumbnail_url}</div>
          <div>{video.title}</div>
          <div>{video.user_name}</div>
          <div>Game title goes here</div>
          <div>Duration: {video.duration}</div>
        </li>
      );
    })}
  </div>;
};

export default VideoColleciton;