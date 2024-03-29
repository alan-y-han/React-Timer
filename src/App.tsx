import React from "react";
// import './App.css';
import CountdownText from "./CountdownText";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import StageText from "./StageText";
import Timer from "./Timer";
import Notification from "./notification.mp3";

type AppState = {
    secondsLeft: number;
    currentStage: number;
    timerRunning: boolean;
};

type AppProps = {};

type Stage = {
    name: string;
    seconds: number;
};

class App extends React.Component<AppProps, AppState> {
    private stages: Stage[] = [
        // {
        //     name: "Intro",
        //     seconds: 2
        // },
        // {
        //     name: "Pre Magitek Colossus",
        //     seconds: 3
        // },
        { name: "Intro", seconds: 72 },
        { name: "Pre Magitek Colossus", seconds: 175 },
        { name: "Post Magitek Colossus", seconds: 51 },
        { name: "Magitek Armor", seconds: 65 },
        { name: "Nero", seconds: 337 },
        { name: "Gaius 1", seconds: 101 },
        { name: "Gaius 2", seconds: 290 },
        { name: "Ultima", seconds: 177 },
        { name: "Between Ultima Phases", seconds: 310 },
        { name: "Lahabrea", seconds: 240 }
    ];

    private defaultState: AppState = {
        secondsLeft: this.stages[0].seconds,
        currentStage: 0,
        timerRunning: false
    };

    private timer: Timer;
    private notificationSound: HTMLAudioElement;

    private silentSound = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";

    constructor(props: AppProps) {
        super(props);

        this.state = this.getDefaultState();
        this.timer = new Timer(this.tick, 1000);
        this.notificationSound = new Audio();
        this.notificationSound.volume = 0.7;
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    public render() {
        const enableNextButton =
            this.state.currentStage === this.stages.length - 1 && this.state.secondsLeft === 0
                ? false
                : !this.state.timerRunning;

        return (
            <div className="App">
                <Button onPress={this.resetButtonCallback}>
                    <div>Reset</div>
                    <FontAwesomeIcon icon={fa.faUndo} />
                </Button>

                <StageText
                    stageNo={this.state.currentStage + 1}
                    totalStages={this.stages.length}
                    stageName={this.stages[this.state.currentStage].name}
                />

                <CountdownText seconds={this.state.secondsLeft} />
                <Button onPress={this.nextButtonCallback} enabled={enableNextButton}>
                    <div>Next</div>
                    <FontAwesomeIcon icon={fa.faPlay} />
                </Button>
            </div>
        );
    }

    nextButtonCallback = () => {
        // play silent sound on button press so it works with iOS
        this.notificationSound.src = this.silentSound;
        this.notificationSound.currentTime = 0;
        this.notificationSound.play();
        this.notificationSound.src = Notification;

        if (!this.state.timerRunning) {
            const nextStage = this.state.currentStage + 1;

            if (this.state.currentStage === 0 && this.state.secondsLeft !== 0) {
                this.startTimer();
            } else if (nextStage < this.stages.length) {
                this.startTimer();
                this.setState({
                    currentStage: nextStage,
                    secondsLeft: this.stages[nextStage].seconds
                });
            }
        }
    };

    resetButtonCallback = () => {
        this.clearTimer();
        this.setState(this.getDefaultState());
    };

    getDefaultState = (): AppState => this.defaultState;

    tick = () => {
        const nextSecond = this.state.secondsLeft - 1;

        if (nextSecond === 0) {
            this.clearTimer();

            this.notificationSound.currentTime = 0;
            this.notificationSound.play();
        }

        this.setState((state) => ({
            secondsLeft: state.secondsLeft - 1
        }));
    };

    startTimer = () => {
        this.timer.start();
        this.setState({ timerRunning: true });
    };

    clearTimer = () => {
        this.timer.stop();
        this.setState({ timerRunning: false });
    };
}

export default App;
