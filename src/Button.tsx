import React from "react"

type Props = {
  onPress: () => void,
  text: string
}

class Button extends React.Component<Props> {
  render() {
    return (
      <button onClick={this.props.onPress}>{this.props.text}</button>
    )
  }
}

export default Button