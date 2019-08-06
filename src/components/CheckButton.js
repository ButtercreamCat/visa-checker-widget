//React
import React, { Component } from "react";
//Redux
import { connect } from "react-redux";
import { loadEntryRequirements, startLoading } from "../actions/actions";
//Antd
import { Button } from "antd";

class CheckButton extends Component {
  handleCheckVisa = () => {
    this.props.startLoading();
    this.props.loadEntryRequirements(
      this.props.citizenship,
      this.props.destinations,
      this.props.language
    );
  };
  render() {
    const { citizenship, destinations, isLoading } = this.props;
    return (
      <div style={{ width: "100%", margin: "40px auto", textAlign: "center" }}>
        <Button
          type="primary"
          style={{ backgroundColor: "#58b95a", color: "#fff", border: "none" }}
          size="large"
          disabled={
            citizenship === "" || destinations.length === 0 || isLoading
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
    language: state.language,
    isLoading: state.isLoading
  };
}

export default connect(
  mapStateToProps,
  { loadEntryRequirements, startLoading }
)(CheckButton);
