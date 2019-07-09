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
      url: `http://localhost:3002/get-author/${this.props.id}`,
      contentType: 'application/json',
      success: (author) => {
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
      <div className="author-spotlight">
        <div className="author-header">
          <img className="avatar" src={this.state.avatar} />
          <div className="author-info">
            <div className="name">{this.state.firstName + ' ' + this.state.lastName}</div>
            <div className="followers">Followers: {this.state.followers}</div>
          </div>
        </div>
        <div>{this.state.bio}</div>
      </div>
    );
  }
}

export default Author;