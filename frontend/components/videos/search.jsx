import React from 'react';
import SearchItem from './search_item';

class Search extends React.Component {
  componentDidMount() {
    this.props.fetchVideos(this.props.match.params.query);
  }

  render(){
    let videos = this.props.videos.map((video, index) => <SearchItem video={video} key={index} />);
    let result = videos.length > 0 ? '' : 'No results found';
    return (
      <div>
        {result}
        {videos}
      </div>
    );
  }
}

export default Search;