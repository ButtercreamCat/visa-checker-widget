import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { loadLocalization, loadEntryRequirements } from "../actions/actions";
// Antd
import { Select } from "antd";

const { Option } = Select;

const languages = [
  { name: "عربى", value: "ar" },
  { name: "Deutschland", value: "de" },
  { name: "dansk", value: "dk" },
  { name: "íslensku", value: "is" },
  { name: "Suomalainen", value: "fi" },
  { name: "English", value: "en" },
  { name: "Español", value: "es" },
  { name: "Français", value: "fr" },
  { name: "Italiano", value: "it" },
  { name: "norsk", value: "no" },
  { name: "русский", value: "ru" },
  { name: "svenska", value: "sv" },
  { name: "中文", value: "zh" }
];

class LanguageSelector extends Component {
  onChange = languageCode => {
    const { citizenship, destinations } = this.props;
    this.props.loadLocalization(languageCode);
    if (citizenship !== "" && destinations !== []) {
      this.props.loadEntryRequirements(citizenship, destinations, languageCode);
    }
  };

  render() {
    return (
      <div>
        <Select
          defaultValue="en"
          style={{ minWidth: 100 }}
          onChange={this.onChange}
        >
          {languages.map(language => (
            <Option key={language.name} value={language.value}>
              {language.name}
            </Option>
          ))}
        </Select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    citizenship: state.citizenship,
    destinations: state.destinations
  };
}

export default connect(
  mapStateToProps,
  { loadLocalization, loadEntryRequirements }
)(LanguageSelector);
