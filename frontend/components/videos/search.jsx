import React from 'react';
import SearchItem from './search_item';
import NavBarTopContainer from '../nav_bar_top/nav_bar_top_container';
import ModalContainer from '../nav_bar_side/modal';

class Search extends React.Component {
  componentDidMount() {
    // debugger
    this.props.searchVideos(this.props.match.params.query);
  }

  render(){
    let videos = this.props.videos.map((video, index) => <SearchItem video={video} key={index} />);
    let result = videos.length > 0 ? '' : 'No results found';
    return (
      <div>
        <NavBarTopContainer />
        <ModalContainer />
        {/* <div className="default-nav">

          <Link to={`/`} className="default-link">
            <div className="default-link-wrapper">
              <i className="fas fa-home fa-2x" id="default-icon"></i>
              <div className="default-text">Home</div>
            </div>
          </Link>

          <Link to={`/upload`} className="default-link">
            <div className="default-link-wrapper">
              <i className="fas fa-video fa-2x" id="default-icon"></i>
              <div className="default-text">Upload</div>
            </div>
          </Link>

          <a href="https://github.com/JustinLieu06" className="default-link" target="_blank">        
            <div className="default-link-wrapper">
            <i className="fab fa-github fa-2x" id="default-icon-2"></i>
              <div className="default-text">Github</div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/justin-lieu-024744150/" className="side-a" target="_blank">              
            <div className="default-link-wrapper">
              <i className="fab fa-linkedin fa-2x" id="default-icon-2"></i>
              <div className="default-text">Linkedin</div>
            </div>
          </a>

          <a href="https://www.youtube.com/" className="side-a" target="_blank">
            <div className="default-link-wrapper">
              <i className="fab fa-youtube fa-2x" id="default-icon"></i>
              <div className="default-text">Original</div>
            </div>
          </a>

        </div> */} 
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