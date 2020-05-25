import React from "react";

type Props = {
  stageNo: number;
  stageNames: string[];
};

class StageText extends React.Component<Props> {
  public render() {
    const { stageNo, stageNames } = this.props;

    return (
      <div>
        <h1>
          Stage {stageNo + 1}/{stageNames.length}: {stageNames[stageNo]}
        </h1>
      </div>
    );
  }
}

export default StageText;
