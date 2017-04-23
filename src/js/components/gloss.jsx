import React from 'react';
import ReactDOM from 'react-dom';
import Leipzig from 'leipzig';

class Gloss extends React.Component {
  render() {
    console.log(this.props);
    return <div data-gloss>
      {this.props.children}
    </div>;
  }
  componentDidUpdate() {
    const leipzig = Leipzig();
    leipzig.gloss();
  }
}

