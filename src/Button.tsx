import React from "react";
import "./Button.css";

type Props = {
  onPress: () => void;
  enabled: boolean;
};

class Button extends React.Component<Props> {
  render() {
    return (
      <button
        className="button"
        onClick={this.props.onPress}
        disabled={!this.props.enabled}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
