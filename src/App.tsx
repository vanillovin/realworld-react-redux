import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import InputSample from "./InputSample";
import "./App.css";

type AppState = {
  subject: {
    title: string;
    sub: string;
  };
  contents: {
    id: number;
    title: string;
    desc: string;
  }[];
};

class App extends Component<{}, AppState, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <TOC data={this.state.contents}> </TOC>
        <Content
          title="HTML"
          desc="HTML is HyperText Markup Language."
        ></Content>
        <InputSample />
      </div>
    );
  }
}

export default App;
