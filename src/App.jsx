import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Aside from "./layout/Aside";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import Topics from "./pages/Topics";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <main className="main">
            <Container fluid>
              <Switch>
                <Route exact path="/" name="Home" component={Home} />
                <Route path="/topics" name="Topics" component={Topics} />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
