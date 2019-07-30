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
      followers: null,
      truncated: true,
      truncBio: null,
      fullBio: null
    };

    this.toggleTrunc = this.toggleTrunc.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: `http://18.223.254.113:3030/${this.props.id}`,
      contentType: 'application/json',
      success: (book) => {
        console.log(book);
        $.ajax({
          method: 'GET',
          url: `http://13.57.54.199:3002/get-author/${book[0].author_id}`,
          contentType: 'application/json',
          success: (author) => {
            console.log(author);
            let truncatedBio = author.bio.slice(0, 180) + '...';
            this.setState({
              firstName: author.firstname,
              lastName: author.lastname,
              fullBio: author.bio,
              avatar: author.avatar,
              followers: author.followers,
              truncBio: truncatedBio,
              bio: truncatedBio
            });
          },
          error: function (jqXHR, exception) {
            var msg = '';
           if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            console.log(msg);
          }
        });
      }
    });
  }

  toggleTrunc (event) {
    if (this.state.truncated) {
      event.preventDefault();
      this.setState({
        bio: this.state.fullBio,
        truncated: false
      });
      event.target.parentElement.removeChild(event.target);
    }
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
        <div>{this.state.bio} <a href="#" onClick={this.toggleTrunc} id="more-btn">More</a></div>
      </div>
    );
  }
}

export default Author;
