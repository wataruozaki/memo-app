import React, { Component } from "react";

export class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };

    this.doChange = this.doChange.bind();
    this.doAction = this.doAction.bind();
  }
  render() {
    return <div></div>;
  }
}

export default AddForm;
