# ViewTube README

## Overview

ViewTube is a clone of the popular streaming site known as YouTube. Users can watch videos, search for videos, and create accounts to upload and delete videos.

[Check Out the Live Site Here!](https://viewtube-fsp.herokuapp.com/#/)

ViewTube uses the MVC design pattern where the backend is implemented with Ruby on Rails, and the frontend is created with Redux and React. Videos and video thumbnails are stored on Amazon S3, and model information is stored on the Heroku Postgres database. Styling was done via normal CSS.

## Features
The app allows users to create accounts, and once logged in via their own account or the demo account, users are able to upload and delete videos. Whether logged in or not, users are still able to watch videos, search for videos, look at video indexes, and have access to the side modal.

### Video Upload
The database for video uploading is AWS which gets updated via a file reader in the upload form.

### Video Search

The search bar is a React form that passes the search query information to the search component which lists all videos where the search query is a substring of. The videos controller has a search function that searches through all the lowercased video titles that contain the lowercased query via active record.

## Code Snippets

## Future Features

* comments

* video likes

* video dislikes

* video updating
