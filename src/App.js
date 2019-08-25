import React, { Component } from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";

import "./app.scss";

const tempArr = [
  {
    nickName: "Joe",
    email: "joe@mail.com",
    age: 24,
    online: false
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
