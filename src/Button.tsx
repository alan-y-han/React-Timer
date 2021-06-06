import React from "react";
import "./Button.css";

type Props = {
    onPress: () => void;
    enabled?: boolean;
};

class Button extends React.Component<Props> {
    render() {
        const { enabled, onPress } = this.props;

        return (
            <button className="button" onClick={onPress} disabled={enabled !== undefined ? !enabled : false}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
