import React from "react";
import { getProgressPoint } from "../../../helpers/bar-helper";
import { BarDisplay } from "./bar-display";
import { TaskItemProps } from "../task-item";
import tw, { css } from 'twin.macro'
const styles = {
  barWrapper: css`
    ${tw`cursor-pointer`} hover:visible hover:opacity-100;
    outline: none;
  `,
}

export const Bar: React.FC<TaskItemProps> = ({
  task,
  rtl,
}) => {
  const progressPoint = getProgressPoint(
    +!rtl * task.progressWidth + task.progressX,
    task.y,
    task.height
  );
  const handleHeight = task.height - 2;
  return (
    <g css={[styles.barWrapper]} tabIndex={0}>
      <BarDisplay
        x={task.x1}
        y={task.y}
        width={task.x2 - task.x1}
        height={task.height}
        progressX={task.progressX}
        progressWidth={task.progressWidth}
        barCornerRadius={task.barCornerRadius}
        styles={task.styles}
      />
    </g>
  );
};
