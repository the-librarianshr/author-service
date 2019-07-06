import React from 'react';
import $ from 'jquery';

class Author extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      bio: null,
      avatar: null,
      followers: null
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3002/authors/${this.props.id}`,
      contentType: 'application/json',
      success: (author) => {
        author = JSON.parse(author);
        this.setState({
          firstName: author.firstname,
          lastName: author.lastname,
          bio: author.bio,
          avatar: author.avatar,
          followers: author.followers
        });
      }
    });
  }

  render () {
    return (
      <div class="author-spotlight">
        <div class="author-header">
          <img class="avatar" src={this.state.avatar} />
          <div class="author-info">
            <div class="name">{this.state.firstName + ' ' + this.state.lastName}</div>
            <div class="followers">Followers: {this.state.followers}</div>
          </div>
        </div>
        <div>{this.state.bio}</div>
      </div>
    );
  }
}

export default Author;