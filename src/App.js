// React
import React from "react";
// Redux
import { connect } from "react-redux";
import { loadLocalization } from "./actions/actions";
// Components
import LanguageSelector from "./components/LanguageSelector";
import CitizenshipSelector from "./components/CitizenshipSelector";
import DestinationsSelector from "./components/DestinationsSelector";
import PlaneDivider from "./components/PlaneDivider";
import CheckButton from "./components/CheckButton";
import Results from "./components/Results";
// Antd
import { Card } from "antd";

class App extends React.Component {
  componentDidMount() {
    this.props.loadLocalization("en");
  }
  render() {
    return (
      <Card
        title={
          <img
            src="/assets/sherpa-logo.svg"
            alt="sherpa-logo"
            style={{ width: 80 }}
          />
        }
        extra={<LanguageSelector />}
        style={{
          width: "50%",
          minWidth: 350,
          maxWidth: 450,
          margin: " 2rem auto",
          boxShadow: "0 0 60px 0 rgba(69,79,89,.1)"
        }}
        headStyle={{ backgroundColor: "#2a8aea", color: "#fff" }}
      >
        <CitizenshipSelector />
        <DestinationsSelector />
        <CheckButton />
        <PlaneDivider />
        <Results />
      </Card>
    );
  }
}

export default connect(null, { loadLocalization })(App);
