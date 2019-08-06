//React
import React, { Component } from "react";
//Redux
import { connect } from "react-redux";
import { loadEntryRequirements } from "../actions/actions";
//Antd
import { Button } from "antd";

class CheckButton extends Component {
  handleCheckVisa = () => {
    this.props.loadEntryRequirements(
      this.props.citizenship,
      this.props.destinations,
      this.props.language
    );
  };
  render() {
    return (
      <div style={{ width: "100%", margin: "40px auto", textAlign: "center" }}>
        <Button
          type="primary"
          style={{ backgroundColor: "#58b95a", color: "#fff", border: "none" }}
          size="large"
          disabled={
            this.props.citizenship === "" ||
            this.props.destinations.length === 0
              ? true
              : false
          }
          onClick={this.handleCheckVisa}
        >
          Do I need a visa?
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    citizenship: state.citizenship,
    destinations: state.destinations,
    language: state.language
  };
}

export default connect(
  mapStateToProps,
  { loadEntryRequirements }
)(CheckButton);
