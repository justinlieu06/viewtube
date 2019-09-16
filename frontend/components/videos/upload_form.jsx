import React from 'react';
import NavBarTopContainer from '../nav_bar_top/nav_bar_top_container';
import NavBarSideContainer from '../nav_bar_side/nav_bar_side_container';

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
    this.props.createVideo(formData).then(
      () => {
        this.setState();
        this.props.history.push('/');
      },
    );
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
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" accept="video/mp4" onChange={this.updateVideo} />
          <input type="file" accept="image/png, image/jpeg" onChange={this.updateThumbnail} />
          <input type="text" placeholder="Title" onChange={this.update('title')} />
          <input type="text" placeholder="Description" onChange={this.update('description')} />
          <input type="submit" value="Upload Video" />
          {this.renderErrors()}
        </form>
      </div>
    )
  }
}


export default UploadForm