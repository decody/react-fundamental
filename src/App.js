import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("just updated");
  }
  componentWillMount() {
    console.log("goodbye, cruel world");
  }
  render() {
    console.log("rendering");
    return (
      <React.Fragment>
        <h1>I am a class {this.state.count}</h1>
        <button type="button" onClick={this.add}>Add</button>
        <button type="button" onClick={this.minus}>Minus</button>
      </React.Fragment>
    )
  }
}

export default App;
