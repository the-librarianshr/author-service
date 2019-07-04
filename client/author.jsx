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
      <div>
        <div>{this.state.firstName + ' ' + this.state.lastName}</div>
        <img src={this.state.avatar} />
        <div>{this.state.bio}</div>
        <h6>Followers: {this.state.followers}</h6>
      </div>
    );
  }
}

export default Author;