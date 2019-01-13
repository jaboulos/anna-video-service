import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoCollectionStyle = styled.li`
  display: inline-block;
  box-sizing: border-box;
  list-style: none;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
  text-overflow: clip;
  text-align: left;
  vertical-align: baseline;
  color: #19171c;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: 360px;
`;

const StyledLink = styled(Link)`
  display: block;
  max-width: 320px;
  color: #19171c;
  font-weight: bolder;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &: hover {
    color: #6441a4;
    text-decoration: underline;
`;


const VideoCollectionEntry = (props) => {
  return (
    <VideoCollectionStyle>
      <div className="link-to-video">
        <StyledLink to={`videos/${props.video.id}`}>
          <div><img src={props.video.thumbnail_url}/></div>
          {props.video.title}
        </StyledLink>
      </div>
      <div className="game-box-art"><img src={props.game.box_art_url} /></div>
      <div className="streamer-name">{props.video.user_name}</div>
      <div>{props.game.name}</div>
      <div className="on-video">Duration: {props.video.duration}</div>
      <div className="on-video">{props.video.view_count} views</div>
      <div className="on-video">{moment(props.video.created_at).fromNow()}</div>
    </VideoCollectionStyle>
  );
};

export default VideoCollectionEntry;