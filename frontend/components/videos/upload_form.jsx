import React from 'react';
import NavBarTopContainer from '../nav_bar_top/nav_bar_top_container';
import NavBarSideContainer from '../nav_bar_side/nav_bar_side_container';
import Modal from '../nav_bar_side/modal';

class UploadForm extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      title: '',
      description: '',
      video: null,
      videoFile: null,
      thumbnail: null,
      thumbnailFile: null,
      titleError: '',
      descriptionError: '',
      videoError: '',
      thumbnailError: '',
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
    this.updateThumbnail = this.updateThumbnail.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[video]', this.state.videoFile);
    formData.append('video[thumbnail]', this.state.thumbnailFile);
    // debugger
    // $.ajax({
    //   url: `/api/videos`,
    //   type: `POST`,
    //   data: formData,
    //   contentType: false,
    //   processData: false
    // });
    // debugger
    // if (this.props.errors > 0){
    //   console.log("Cannot upload");
    //   return;
    // }
    if (this.state.title.length === 0){
      this.setState({titleError: 'Title field cannot be blank'})
    }
    if (this.state.description.length === 0){
      this.setState({descriptionError: 'Description field cannot be blank'})      
    }
    if (this.state.videoFile === null){
      this.setState({videoError: 'Video must be uploaded'})
    }
    if (this.state.thumbnailFile === null){
      this.setState({thumbnailError: 'Thumbnail must be uploaded'})
    }
    if (this.state.title.length !== 0 && this.state.description.length !== 0 && 
      this.state.videoFile !== null && this.state.thumbnailFile !== null){
      this.setState({ loading: true});
      this.props.createVideo(formData)
      .then(
        () => {
          console.log(formData);
          this.setState({ loading: false });
          this.props.history.push('/');
        },
      )
    } else {
      console.log("Upload unsuccessful");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };

  updateVideo(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ video: reader.result, videoFile: file });
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  updateThumbnail(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ thumbnail: reader.result, thumbnailFile: file });
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

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

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    let uploadButton = this.state.loading ?
      <button className="upload-button" onClick={this.handleSubmit} disabled >
        <div className="loader"></div>
      </button> :
      <button className="loading-button" onClick={this.handleSubmit} disabled >
      <div className="loader"></div>
      </button>;
      // <button className="upload-button" onClick={this.handleSubmit} >
      //   Publish
      // </button>;
    return(
      <div className="upload-wrapper">
        <NavBarTopContainer />
        <Modal />

        <form className="upload-form">

          {/* VIDEO UPLOAD */}
          <div className="video-upload">
            <label htmlFor="upload-mp4"
              className="form-upload-icon">
              <i className="fas fa-play-circle"></i>
            </label>
            <input type="file" accept="video/mp4" onChange={this.updateVideo} />
          </div>

          {/* THUMBNAIL UPLOAD */}
          <div className="thumbnail-upload">
            <input className="thumb-inp" type="file" accept="image/png, image/jpeg" onChange={this.updateThumbnail} />
          </div>

          {/* TITLE UPLOAD */}
          <div className="title-upload">
            <input className="title-inp" type="text" placeholder="Title" onChange={this.update('title')} />
          </div>

          {/* DESCRIPTION UPLOAD */}
          <div className="description-upload">
            <textarea className="desc-inp" type="text" placeholder="Description" onChange={this.update('description')} />
          </div>
          {this.renderErrors()}
          <div className="upload-errors">
            <p>{this.state.titleError}</p>
            <p>{this.state.descriptionError}</p>
            <p>{this.state.videoError}</p>
            <p>{this.state.thumbnailError}</p>
          </div>

          {/* UPLOAD BUTTON */}
          <div className="upload-button-wrapper">{uploadButton}</div>
        </form>
      </div>
    )
  }
}


export default UploadForm