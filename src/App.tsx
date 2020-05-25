import React from 'react';
// import './App.css';
import Countdown from './Countdown';
import Button from './Button';

type State = {
  seconds: number
}

type Props = {
};

class App extends React.Component<Props, State> {
  private timerID: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      seconds: 10
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  public render() {
    return (
      <div className="App">
        <Button onPress={this.startCountdown} text={"Start"}  />
        <Countdown
          seconds={this.state.seconds}
        />
      </div>
    )
  }

  startCountdown = () => {
    this.timerID = setInterval(() => this.countdown(), 1000)
  }

  countdown() {
    this.setState({
      seconds: this.state.seconds - 1
    })
  }
}

export default App;
