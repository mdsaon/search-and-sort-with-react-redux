import React, { Component } from "react";
import "./App.css";
import Projects from "./components/projects";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Projects />
        </div>
      </Provider>
    );
  }
}

export default App;
