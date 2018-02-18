import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Breadcrumb from "./layout/Breadcrumb";
import Aside from "./layout/Aside";
import Footer from "./layout/Footer";

import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/" name="Home" component={Home} />
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
