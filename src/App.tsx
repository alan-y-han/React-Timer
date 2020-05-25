import React from "react";
// import './App.css';
import Countdown from "./Countdown";
import Button from "./Button";

type State = {
  seconds: number;
};

type Props = {};

class App extends React.Component<Props, State> {
  private timerID: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      seconds: 10,
    };
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  public render() {
    return (
      <div className="App">
        <Button onPress={() => {}} text={"Reset"} />
        <Countdown seconds={this.state.seconds} />
        <Button onPress={this.startCountdown} text={"Start"} />
      </div>
    );
  }

  startCountdown = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  resetButtonCallback = () => {
    this.clearTimer();
  };

  tick() {
    this.setState({
      seconds: this.state.seconds - 1,
    });
  }

  clearTimer = () => {
    if (this.timerID) {
      clearInterval(this.timerID);
      this.timerID = undefined;
    }
  };
}

export default App;
