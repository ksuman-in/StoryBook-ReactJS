import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome to {title}</h2>
        </header>
      </div>
    );
  }
}

App.defaultProps = {
  title: "React"
};
export default App;
