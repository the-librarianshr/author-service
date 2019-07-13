import React from 'react';
import ReactDOM from 'react-dom';
import Author from './author.jsx';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  display: inline-block;
  line-height 18px;
  text-align: left;
  color: #181818;

  .author-spotlight {
    width: 300px;
  }

  .author-header {
    display: inline-block;
    margin-bottom: 12px;
  }

  .author-info {
    float: left;
    display: inline-block;
    vertical-align: bottom;
    margin-top: 39px;
  }

  .avatar {
    float: left;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .name {
    font-size: 16px;
    font-family: serif;
    font-weight: bold;
  }

  .followers {
    font-size: 9px;
    color: #999999;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.id);
  }

  render () {
    return (
      <StyledDiv>
        <Author id={this.props.id} />
      </StyledDiv>
    );
  }
}

let id = document.URL.split('/');
id = id.filter(element => element !== '');
id = Number(id[id.length - 1]);

ReactDOM.render(<App id={id} />, document.getElementById('author-app'));