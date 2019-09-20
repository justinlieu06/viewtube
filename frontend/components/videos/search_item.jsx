import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({ video }) => {
  return (
    <div className="search-item-wrapper">
      <Link to={`/watch/${video.id}`} className="vid-index-item-link">
        <div className="search-item-inner-wrapper">
          <img src={video.thumbnail} width="210" height="118" alt="Viewtube Thumbnail" />
          <div className="search-description">
            <div className="search-index-item-title">{video.title}</div>
            <div className="search-index-item-author">{video.author}</div>
            <div className="search-index-item-author">{video.published}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SearchItem;