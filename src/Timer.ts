class Timer {
    private callback?: () => void;
    private timeInterval: number;
    private timerId?: NodeJS.Timeout;

    constructor(callback: () => void, timeInterval: number) {
        this.callback = callback;
        this.timeInterval = timeInterval;
    }

    public start = () => {
        if (this.callback) {
            if (!this.timerId) {
                this.timerId = setInterval(this.callback, this.timeInterval);
            } else {
                console.warn("Tried to start timer, but it is already running");
            }
        } else {
            console.error("Tried to start timer without a callback");
        }
    };

    public stop = () => {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = undefined;
        } else {
            console.warn("Tried to stop timer, but it is already stopped");
        }
    };
}

export default Timer;
