import React from "react";
import { TaskItemProps } from "../task-item";
import tw, {css} from "twin.macro";


const styles = {
  milestoneWrapper: css`${tw`cursor-pointer`}
  outline: none;`,
  milestoneBackground: tw`select-none`,
}

export const Milestone: React.FC<TaskItemProps> = ({
  task,
  isDateChangeable,
}) => {
  const transform = `rotate(45 ${task.x1 + task.height * 0.356} 
    ${task.y + task.height * 0.85})`;
  const getBarColor = () => {
    return task.styles.backgroundColor
  };

  return (
    <g tabIndex={0} css={[styles.milestoneWrapper]}>
      <rect
        fill={getBarColor()}
        x={task.x1}
        width={task.height}
        y={task.y}
        height={task.height}
        rx={task.barCornerRadius}
        ry={task.barCornerRadius}
        transform={transform}
        css={[styles.milestoneBackground]}
      />
    </g>
  );
};
