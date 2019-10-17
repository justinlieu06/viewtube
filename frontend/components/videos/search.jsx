import React from 'react';
import SearchItem from './search_item';
import NavBarTopContainer from '../nav_bar_top/nav_bar_top_container';
import ModalContainer from '../nav_bar_side/modal';

class Search extends React.Component {
  componentDidMount() {
    this.props.searchVideos(this.props.query);
  }

  componentDidUpdate(prevProps){
    if (prevProps.query !== this.props.query){
      this.props.searchVideos(this.props.match.params.query);
    }
  }

  render(){
    let videos = this.props.videos.map((video, index) => <SearchItem video={video} key={index} />);
    let result = videos.length > 0 ? '' : 'No results found';
    return (
      <div>
        <NavBarTopContainer />
        <ModalContainer />
        <div className="search-outer-wrapper">
          <div className="search-header">
            {result}
            <hr style={{ color: 'blue' }}/>
          </div>
          {videos}
        </div>
      </div>
    );
  }
}

export default Search;