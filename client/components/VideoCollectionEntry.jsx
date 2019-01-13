import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoCollectionStyle = styled.li`
  display: inline-block;
  box-sizing: border-box;
  list-style: none;
  list-style-position: outside;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  text-overflow: clip;
  text-align: left;
  vertical-align: baseline;
  color: #19171c;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: 360px;
`;

const StyledContainerDiv = styled.div`
  max-width: 360px;
  display: block;
`;

const StyledPreviewImg = styled.img`
  width: 100%;
  border-radius: 6px;
  position: relative;
`;

const StyledVideoDetailsBackground = styled.div`
background-color: #19171c;
border-radius: 2px;
opacity: 0.6;
padding-top: 2px;
padding-left: 2px;
padding-right: 2px;
padding-bottom: 2px;
transform: translate(5%, -120%);
position: absolute;
box-shadow: none;
width: 80px;
`;

const StyledVideoDetails = styled.div`
  color: white;
  font-size: 11px;
  opacity: 1.0;
`;

const StyledVideoInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: nowrap;
  background-color: none;
`;

const StyledGameImg = styled.img`
  left: 0;
  position: relative;
  vertical-align: top;
  margin-right: 10px;
  border-radius: 2px;
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;
  transform: translateY(-10%);
`;

const StyledVideoText = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
`;

const StyledLink = styled(Link)`
  display: block;
  color: #19171c;
  max-width: 260px;
  font-weight: bolder;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &: hover {
    color: #6441a4;
    text-decoration: underline;
`;

const StyledDiv = styled.div`
  color: #19171c;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  &: hover {
    color: #6441a4;
    text-decoration: underline;
`;


const VideoCollectionEntry = (props) => {
  return (
    <VideoCollectionStyle>
      <StyledContainerDiv>
        <Link to={`videos/${props.video.id}`}>
          <StyledPreviewImg src={props.video.thumbnail_url}/>
          <StyledVideoDetailsBackground>
            <StyledVideoDetails>
              <div>{props.video.duration}</div>
              <div>{props.video.view_count} views</div>
              <div>{moment(props.video.created_at).fromNow()}</div>
            </StyledVideoDetails>
          </StyledVideoDetailsBackground>
        </Link>
        <StyledVideoInfo>
          <StyledGameImg src={props.game.box_art_url} />
          <StyledVideoText>
            <StyledLink to={`videos/${props.video.id}`}>
              {props.video.title}
            </StyledLink>
            <StyledDiv>{props.video.user_name}</StyledDiv>
            <StyledDiv>{props.game.name}</StyledDiv>
          </StyledVideoText>
        </StyledVideoInfo>
      </StyledContainerDiv>
    </VideoCollectionStyle>
  );
};

export default VideoCollectionEntry;