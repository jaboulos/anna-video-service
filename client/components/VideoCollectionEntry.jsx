import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
const styles = {};

styles.videoCollectionEntry = {
  display: 'inline-block',
  boxSizing: 'border-box',
  listStyle: 'none',
  listStylePosition: 'outside',
  paddingLeft: '10px',
  paddingRight: '10px',
  marginBottom: '20px',
  textOverflow: 'clip',
  textAlign: 'left',
  verticalAlign: 'baseline',
  color: '#19171c',
  fontFamily: 'Helvetica Neue',
  width: '360px'
};

styles.styledContainerDiv = {
  maxWidth: '360px',
  display: 'block'
};

styles.styledPreviewImg = {
  width: '100%',
  borderRadius: '6px',
  position: 'relative'
};

styles.styledVideoDetailsBackground = {
  backgroundColor: '#19171c',
  borderRadius: '2px',
  opacity: '0.6',
  padding: '2px',
  transform: 'translate(5%, -120%)',
  position: 'absolute',
  boxShadow: 'none',
  width: '80px'
};

styles.styledVideoDetails = {
  color: 'white',
  fontSize: '11px',
  opacity: '1.0'
};

styles.styledVideoInfo = {
  marginTop: '10px',
  display: 'flex',
  flexWrap: 'nowrap',
  backgroundColor: 'none'
};

styles.styledGameImg = {
  left: '0',
  position: 'relative',
  verticalAlign: 'top',
  marginRight: '10px',
  borderRadius: '2px',
  overflow: 'hidden',
  flexGrow: '0',
  flexShrink: '0',
  transform: 'translateY(-10%)'
};

styles.styledVideoText = {
  flexGrow: '1',
  flexShrink: '1',
  width: '100%'
};

styles.styledLink = {
  display: 'block',
  color: '#19171c',
  maxWidth: '260px',
  fontWeight: 'bolder',
  textDecoration: 'none',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

styles.styledDiv = {
  color: '#19171c',
  cursor: 'pointer',
  fontSize: '12px',
  fontWeight: '400'
};


const VideoCollectionEntry = (props) => {
  return (
    <li style={styles.videoCollectionEntry}>
      <div style={styles.styledContainerDiv}>
        <Link to={`videos/${props.video.id}`}>
          <img style={styles.styledPreviewImg} src={props.video.thumbnail_url}/>
          <div style={styles.styledVideoDetailsBackground}>
            <div style={styles.styledVideoDetails}>
              <div>{props.video.duration}</div>
              <div>{props.video.view_count} views</div>
              <div>{moment(props.video.created_at).fromNow()}</div>
            </div>
          </div>
        </Link>
        <div style={styles.styledVideoInfo}>
          <img style={styles.styledGameImg} src={props.game.box_art_url} />
          <div style={styles.styledVideoText}>
            <Link to={`videos/${props.video.id}`} style={styles.styledLink}>
              {props.video.title}
            </Link>
            <div style={styles.styledDiv}>{props.video.user_name}</div>
            <div style={styles.styledDiv}>{props.game.name}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoCollectionEntry;