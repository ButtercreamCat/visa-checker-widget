// React
import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { setCitizenship } from "../actions/actions";
// Antd
import { Select } from "antd";
// Styled-Components
import styled from "styled-components";

const { Option } = Select;

const Title = styled.h3`
  margin-bottom: 1rem;
  width: 300px;
`;

class CitizenshipSelector extends Component {
  onChange = value => {
    console.log(`selected ${value}`);
    this.props.setCitizenship(value);
  };

  render() {
    const { countries, localization } = this.props;
    return (
      <div style={{ width: 320, margin: "25px auto" }}>
        <Title>{localization.checkRequirements}</Title>
        <Select
          showSearch
          style={{ width: 320 }}
          placeholder={localization.searchInput}
          optionFilterProp="country"
          onChange={this.onChange}
          filterOption={(input, option) => {
            return (
              option.props.children.props.children[1].props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            );
          }}
        >
          {countries.map(country => (
            <Option key={`citizenship-${country.name}`} value={country.alpha_2}>
              <div>
                <span
                  className={`flag-icon flag-icon-${country.alpha_2.toLowerCase()}`}
                />
                <span style={{ paddingLeft: "10px" }}>{country.name}</span>
              </div>
            </Option>
          ))}
        </Select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    localization: state.localization
  };
}

export default connect(
  mapStateToProps,
  { setCitizenship }
)(CitizenshipSelector);
