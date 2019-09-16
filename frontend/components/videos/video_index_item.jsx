import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = ({ video }) => {
  return (
    <li>
      <Link to={`/watch/${video.id}`}>
        <div>
          <img src={video.thumbnail} />
          <div>
            <p>{video.title}</p>
            <p>{video.author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default VideoIndexItem;