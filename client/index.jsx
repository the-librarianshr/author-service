import React from 'react';
import ReactDOM from 'react-dom';
import Author from './author.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Author id='9' />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));