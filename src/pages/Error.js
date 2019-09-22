import React, { Component } from "react";

export default class Error extends Component {
  render() {
    return (
      <div className="error">
        Sorry NO Page found
        <br />
        Url:{this.props.location.pathname}
      </div>
    );
  }
}
