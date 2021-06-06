import React from 'react'

type Props = {
    stageNo: number
    totalStages: number
    stageName: string
}

class StageText extends React.Component<Props> {
    public render() {
        const { stageNo, totalStages, stageName } = this.props

        return (
            <div>
                <h1>{`Stage ${stageNo} / ${totalStages}: ${stageName}`}</h1>
            </div>
        )
    }
}

export default StageText
