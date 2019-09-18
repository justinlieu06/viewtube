import React from 'react';
import { Link } from 'react-router-dom';

const SideIndexItem = ({ video }) => {
  return (
    <div className="side-item-wrapper">
      <Link to={`/watch/${video.id}`} className="vid-index-item-link">
        <div className="side-item-inner-wrapper">
          <div><img src={video.thumbnail} width="210" height="118" alt="Viewtube Thumbnail" /></div>
          <div className="video-description">
            <div className="vid-index-item-title">{video.title}</div>
            <div className="vid-index-item-author">{video.author}</div>
            <div className="vid-index-item-author">{video.published}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SideIndexItem;