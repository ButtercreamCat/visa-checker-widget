import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Avatar, Button, Icon } from "antd";

class Results extends Component {
  render() {
    if (this.props.entryRequirements !== []) {
      const resultsArr = this.props.entryRequirements;
      return (
        <div>
          <List
            itemLayout="vertical"
            size="large"
            locale={{
              emptyText: (
                <div>
                  <img
                    src="/assets/passport.svg"
                    alt="visa"
                    style={{ width: 60 }}
                  />
                  <p>No visa data</p>
                </div>
              )
            }}
            dataSource={resultsArr}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar style={{ backgroundColor: "#f0f0f0" }}>
                      <span
                        className={`flag-icon flag-icon-${item.visa[0].country2.toLowerCase()}`}
                      />
                    </Avatar>
                  }
                  title={item.visa[0].textual.text[0]}
                  description={
                    item.visa[0].allowedStay
                      ? `${this.props.localization.messages.allowedToStay} ${
                          item.visa[0].allowedStay
                        }`
                      : ""
                  }
                />
                <div>
                  <p style={{ marginTop: "1rem" }}>
                    {item.visa[0].textual.text.map((text, i) => {
                      if (i === 0) {
                        return "";
                      } else {
                        return `${text} `;
                      }
                    })}
                  </p>
                  {item.visa[0].available ? (
                    <Button
                      href={item.visa[0].availableVisas[0].productRedirectUrl}
                      type="primary"
                    >
                      {this.props.localization.applyBtn}
                      <Icon type="right" />
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              </List.Item>
            )}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    entryRequirements: state.entryRequirements,
    localization: state.localization
  };
}

export default connect(
  mapStateToProps,
  null
)(Results);
