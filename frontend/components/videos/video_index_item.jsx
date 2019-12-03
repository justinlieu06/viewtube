import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = ({ video }) => {
  return (
    <div className="index-item-wrapper">
      <Link to={`/watch/${video.id}`} className="vid-index-item-link">
        <div>
          <img src={video.thumbnail} width="288" height="160" alt="Viewtube Thumbnail" />
          <div className="video-description">
            <div className="vid-index-item-title">{video.title}</div>
            
            <div className="vid-index-item-author">{video.author}</div>
            <div className="vid-index-item-published">{video.published}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default VideoIndexItem;