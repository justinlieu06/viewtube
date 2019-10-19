# ViewTube README

## Overview

ViewTube is a clone of the popular streaming site known as YouTube. Users can watch videos, search for videos, and create accounts to upload and delete videos.

[Check Out the Live Site Here!](https://viewtube-fsp.herokuapp.com/#/)

ViewTube uses the MVC design pattern where the backend is implemented with Ruby on Rails, and the frontend is created with Redux and React. Videos and video thumbnails are stored on Amazon S3, and model information is stored on the Heroku Postgres database. Styling was done via normal CSS.

## Features
The app allows users to create accounts, and once logged in via their own account or the demo account, users are able to upload and delete videos. They are also able to comment on videos, and delete their own comments. Finally, logged in users are able to like and dislike any video. Whether logged in or not, users are still able to watch videos, search for videos, look at video indexes, and have access to the side modal.

### Video Upload
The database for video uploading is AWS which gets updated via a file reader in the upload form.

### Video Search

The search bar is a React form that passes the search query information to the search component which lists all videos where the search query is a substring of. The videos controller has a search function that searches through all the lowercased video titles that contain the lowercased query via active record.

### Video Comments

The comments component state has access to all comments, but when mapping states to props, only comments with a video id matching the current video id will be selected. The comments then need to be listed out, so the code goes through the state's comment array, and creates a comment item for each comment. However, since we want the most recent comment on the top, I changed the code to map through a shallow copy (so to not reverse the original comments array every time a render occurs) of the comments array in reverse order. 

### Video Likes/Dislikes
A logged in user can like or dislike each video. A like/dislike is created upon pressing either the like or dislike button, and the state of the like_dislike component keeps track of how many likes and dislikes there are for each video it is a child of. However, since users can only like or dislike once, if a user likes a video that they dislike, for example, the code destroys the dislike, creates a like, and manipulates the state's likes and dislikes appropriately.

## Code Snippets

In the comments component, we want to rerender the comments component after a new comment is created for the current video. To check if a new comment has been created, the code checks the previous prop comments with the current prop comments, and if there is a new state comment, it will push such state comment into state comments, and finally, force a render now that the state has been properly updated.

```
componentDidUpdate(prevProps, prevState){
    let equal = true;
    let prevComments = prevProps.stateComments;
    let currComments = this.props.stateComments;
    //check if arrays are equal
    if (prevComments.length !== currComments.length){
      equal = false;
    }
    for (let i = 0; i < prevComments.length; i++){
      if (prevComments[i] !== currComments[i]){
        equal = false;
      }
    }
    //only update if the state comments are not equal
    if (!equal){
      this.state.comments.push(currComments[currComments.length-1]);
      this.forceUpdate();
    }
  }
  ```
  
The delete video button is only available to the owner of the video so the code checks if the current user's id is the same as the video author's id. However, upon a refresh on the video show page, the state's video will initially be undefined, so the code must verify that the video is not undefined before it checks the author_id to prevent an error. 
  ```
  if (this.props.currentUser && this.state.video){
    if (this.props.currentUser.id === this.state.video.author_id){
      deleteButton = <button onClick={this.handleDelete} className="delete-button">DELETE VIDEO</button>
    }
  }
  ```

## Future Features

* video updating
