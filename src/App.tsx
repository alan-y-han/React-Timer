import React from "react";
// import './App.css';
import CountdownText from "./CountdownText";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import StageText from "./StageText";

type State = {
  seconds: number;
  running: boolean;
};

type Props = {};

class App extends React.Component<Props, State> {
  private timerID: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      seconds: 10,
      running: false,
    };
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  public render() {
    return (
      <div className="App">
        <Button onPress={this.resetButtonCallback} enabled={true}>
          <div>Reset</div>
          <FontAwesomeIcon icon={fa.faUndo} />
        </Button>

        <StageText stageNo={0} stageNames={["woot"]} />

        <CountdownText seconds={this.state.seconds} />
        <Button
          onPress={this.startButtonCallback}
          enabled={!this.state.running}
        >
          <div>Start</div>
          <FontAwesomeIcon icon={fa.faPlay} />
        </Button>
      </div>
    );
  }

  startButtonCallback = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({
      running: true,
    });
  };

  resetButtonCallback = () => {
    this.clearTimer();
    this.setState({
      seconds: 10,
      running: false,
    });
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
