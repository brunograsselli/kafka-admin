import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span>
          <a href="http://lucapette.me">lucapette</a> &copy; 2018.
        </span>
        <span className="ml-auto">
          Powered by <a href="http://coreui.io">CoreUI</a>
        </span>
      </footer>
    );
  }
}

export default Footer;
