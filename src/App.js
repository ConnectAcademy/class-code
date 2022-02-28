import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, show: true };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    console.log("I will render once i mount");
  }

  componentDidUpdate() {
    console.log("I updated!");
  }

  componentWillUnmount() {
    alert("I am about to dismount");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count + -1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {console.log("Re-render")}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
