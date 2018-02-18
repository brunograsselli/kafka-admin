import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./layout/Header";
import Breadcrumb from "./layout/Breadcrumb";
import Sidebar from "./layout/Sidebar";
import Aside from "./layout/Aside";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import Topics from "./pages/Topics";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar />
            <main className="main">
              <Container fluid>
                <Breadcrumb />
                <Route exact path="/" name="Home" component={Home} />
                <Route exact path="/topics" name="Topics" component={Topics} />
              </Container>
            </main>
            <Aside />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
