import React from 'react';
import moment from 'moment';
import axios from 'axios';
import styled from 'styled-components';

const VideoPlayerStyle = styled.div`
  display: inline-block;
  width: 1081px;
  box-sizing: content-box;
  borderstyle: solid;
  borderwidth: 1px;
  text-align: left;
  vertical-align: top;
  font-size: 19px;
  font-weight: 350;
  background-color: #faf9fa;
  box-shadow: 5px 5px 2px 1px #dad8de;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const CategoryStyle = styled.span`
  font-size: 15px;
`;

const ImageStyle = styled.div`
  float: left;
  padding-right: 10px;
`;

const ViewStyle = styled.div`
  float: right;
  text-align: right;
  color: #999999;
`;

const GameNameStyle = styled.span`
  padding-left: 2px;
  font-size: 15px;
  color: #6441a4;
  cursor: pointer;
  &: hover {
    text-decoration: underline;
  }
`;

const VideoPlayer = props => {
  return (
    <div>
      <iframe
        style={styles.iFrameStyle}
        id="video"
        className="embed-responsive-item"
        src={'https://player.twitch.tv/?video=v' + props.video.id}
        height="780"
        width="100%"
        scrolling="no"
        allowFullScreen={true}
      />
      <div className="justWantBoxShadow" style={styles.videoPlayerStyle}>
        <div style={styles.imgContainerStyle}>
          <img style={styles.imgStyle} src={props.game.box_art_url} />
        </div>
        <div style={styles.titleBox}>
          <p style={styles.titleStyle}>
            {props.video.title} ·{' '}
            {moment(props.video.created_at).fromNow()}
          </p>
        </div>
        <div style={styles.viewStyle}>
          <svg preserveAspectRatio="xMidYMin meet" width="5%" height="5%" viewBox="0 0 20 20">
            <path
              d="M10 15c-4.044 0-7-3.288-7-5 0-1.712 2.956-5 7-5 4.044 0 7 3.288 7 5 0 1.712-2.956 5-7
            5m0-12c4.763 0 9 3.914 9 7s-4.237 7-9 7-9-3.914-9-7 4.237-7 9-7zm3 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"
              fill="#999999"
              fillRule="evenodd"
            />
          </svg>
          <span style={styles.span}> {props.video.view_count}</span>
        </div>
        <div style={styles.titleBox}>
          <p style={styles.categoryStyle}>Category: {' '}</p>
          <p style={styles.gameNameStyle}>{props.game.name}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {};

styles.titleBox = {
  display: 'flex',
}

styles.videoPlayerStyle = {
  display: 'inline-block',
  width: '100%',
  boxSizing: 'content-box',
  borderstyle: 'solid',
  borderwidth: '1px',
  textAlign: 'left',
  verticalAlign: 'top',
  fontSize: '19px',
  fontWeight: '350',
  backgroundColor: '#fff',
  fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
  height: '75px',
  marginBottom: '36px'
};

styles.iFrameStyle = {
  border: 'none'
}

styles.imgContainerStyle = {
  float: 'left',
  margin: '10px',
}

styles.imgStyle = {
  height: '55px',
  width: '40px',
};

styles.titleStyle = {
  color: 'black',
  paddingLeft: '2px',
  fontSize: '15px',
  margin: '0px',
  paddingTop: '10px',
  fontSize: '17px',
}

styles.categoryStyle = {
  color: 'black',
  paddingLeft: '2px',
  fontSize: '15px',
  margin: '12px 0px 0px 0px'
};

styles.viewStyle = {
  float: 'right',
  textAlign: 'right',
  color: '#999999',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
};

styles.gameNameStyle = {
  paddingLeft: '2px',
  color: '#6441a4',
  cursor: 'pointer',
  fontSize: '15px',
  margin: '12px 0px 0px 0px'
};

styles.span = {
  fontSize: '15px',
  padding: '0px 10px 0px 7px'
}

export default VideoPlayer;
