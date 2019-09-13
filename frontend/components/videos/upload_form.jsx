import React from 'react';
import NavBarTopContainer from '../nav_bar_top/nav_bar_top_container';
import NavBarSideContainer from '../nav_bar_side/nav_bar_side_container';

class UploadForm extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      title: '',
      description: '',
      videoFile: null,
      videoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[videoUrl]', this.state.videoFile);
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
      this.setState({ videoUrl: reader.result, videoFile: file });
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ videoUrl: "", videoFile: null});
    }
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="upload-mp4"
            className="form-upload-icon">
            <i className="fas fa-play-circle"></i>
          </label>
          <input type="file" accept="video/mp4" onChange={this.updateVideo} />

        </form>
      </div>
    )
  }
}


export default UploadForm