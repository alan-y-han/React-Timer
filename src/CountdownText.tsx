import React from 'react'

type Props = {
    seconds: number
}

class CountdownText extends React.Component<Props> {
    public render() {
        return this.props.seconds !== 0 ? (
            <div>
                <h1>Time left: {+this.props.seconds}</h1>
            </div>
        ) : (
            <div>
                <h1>Time left: Finished</h1>
            </div>
        )
    }
}

export default CountdownText
