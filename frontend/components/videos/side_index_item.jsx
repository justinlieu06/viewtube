import React from 'react';
import { Link } from 'react-router-dom';

const SideIndexItem = ({ video }) => {
  return (
    <Link to={`/watch/${video.id}`} className="vid-index-item-link">
      <div className="side-item-inner-wrapper" >
        <div className="side-thumbnail"><img src={video.thumbnail} width="210" height="118" alt="Viewtube Thumbnail" /></div>
        <div className="side-description">
          <div className="side-index-item-title">{video.title}</div>
          <div className="side-index-item-author">{video.author}</div>
          <div className="side-index-item-author">{video.published}</div>
        </div>
      </div>
    </Link>
  )
}

export default SideIndexItem;