import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = ({ video }) => {
  return (
    <div className="index-item-wrapper">
      <Link to={`/watch/${video.id}`}>
        <div>
          <img src={video.thumbnail} width="210" height="118" alt="Viewtube Thumbnail" />
          <div className="video-description">
            <div className="index-item-title">{video.title}</div>
            <div className="index-item-author">{video.author}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default VideoIndexItem;