import React from 'react';

type Props = {
  seconds: number
}

class Countdown extends React.Component<Props> {
  public render() {
    return (
      <div>
        <h1>
          Time left: {+ this.props.seconds}
        </h1>
      </div>
    )
  }
}

export default Countdown
