import React from 'react';
import NavBarTopContainer from '../nav_bar_top/nav_bar_top_container';
import NavBarSideContainer from '../nav_bar_side/nav_bar_side_container';
import Modal from '../nav_bar_side/modal';

class UpdateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.video;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount(){
    this.setState({ loading: false });
    this.props.fetchVideo(this.props.match.params.videoId);
    this.props.clearErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[id', this.state.id);
    this.props.updateVideo(this.state, formData).then(
      () => this.props.history.replace(`/watch/${this.state.id}`)
    );
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteVideo(this.state.id).then(
      () => this.props.history.replace(`/`)
    );
  }

  handleCancel(e){
    e.preventDefault();
    this.props.history.replace(`/watch/${this.state.id}`)
  }

  render(){
    if (!this.props.video) {
      this.props.history.replace(`/`)      
      return <div></div>
    };

    let updateButton = this.state.loading ?
      <button className="loading-button" onClick={this.handleSubmit} disabled >
      <div className="loader"></div>
      </button> :
      <button className="upd-button" onClick={this.handleSubmit} >
        Update
      </button>;

    let updateThumbnail = this.state.thumbnail?
      <img src={this.state.thumbnail} width="300px" height="200px"/> :
      <div className="update-thumbnail-placeholder">Thumbnail Placeholder</div>

    return (

      <div className="upload-wrapper">
        <NavBarTopContainer />
        <Modal />

        <form>
        <div className="update-form">

          <div className="update-header">
            <span className="v">Edit Video Details</span>
            {/* <span className="v">E</span>
            <span className="i">d</span>
            <span className="e">i</span>
            <span className="w">t</span>
            <span> </span>
            <span className="t">V</span>
            <span className="u">i</span>
            <span className="b">d</span>
            <span className="e">e</span>
            <span className="v">o</span>
            <span> </span>
            <span className="i">D</span>
            <span className="e">e</span>
            <span className="w">t</span>
            <span className="t">a</span>
            <span className="u">i</span>
            <span className="b">l</span>
            <span className="e">s</span> */}
          </div>

          <div className="update-thumbnail">{updateThumbnail}</div>

          {/* TITLE UPLOAD */}
          <div className="title-update">
            <input className="update-title-inp" type="text" placeholder="Video Title" 
              value={this.state.title} onChange={this.update('title')} />
          </div>

          {/* DESCRIPTION UPLOAD */}
          <div className="desc-update">
            <textarea className="update-desc-inp" type="text" placeholder="Video Description" 
              value={this.state.description} onChange={this.update('description')} />
          </div>

          {/* UPLOAD BUTTON */}
          <div className="update-buttons-wrapper">
            <button onClick={this.handleCancel} className="upd-button" id="cancel">Cancel</button>
            <div className="upd-buttons-inner-wrapper">
              <button onClick={this.handleDelete} className="upd-button" id="delete">Delete</button>
              {updateButton}
            </div>
          </div>
        </div>
        </form>
      </div>
    )
  }

}

export default UpdateForm
