import React from "react";
import { TaskItemProps } from "../task-item";
import tw, {css} from "twin.macro";

const styles = {
  projectWrapper: css`${tw`cursor-pointer`} outline: none;`,
  projectBackground: tw`select-none opacity-60`,
  projectTop: tw`select-none`,
}



export const Project: React.FC<TaskItemProps> = ({ task }) => {
  const barColor = task.styles.backgroundColor;
  const processColor = task.styles.progressColor;
  const projectWith = task.x2 - task.x1;

  const projectLeftTriangle = [
    task.x1,
    task.y + task.height / 2 - 1,
    task.x1,
    task.y + task.height,
    task.x1 + 15,
    task.y + task.height / 2 - 1,
  ].join(",");
  const projectRightTriangle = [
    task.x2,
    task.y + task.height / 2 - 1,
    task.x2,
    task.y + task.height,
    task.x2 - 15,
    task.y + task.height / 2 - 1,
  ].join(",");

  return (
    <g tabIndex={0} css={[styles.projectWrapper]}>
      <rect
        fill={barColor}
        x={task.x1}
        width={projectWith}
        y={task.y}
        height={task.height}
        rx={task.barCornerRadius}
        ry={task.barCornerRadius}
        css={[styles.projectBackground]}
      />
      <rect
        x={task.progressX}
        width={task.progressWidth}
        y={task.y}
        height={task.height}
        ry={task.barCornerRadius}
        rx={task.barCornerRadius}
        fill={processColor}
      />
      <rect
        fill={barColor}
        x={task.x1}
        width={projectWith}
        y={task.y}
        height={task.height / 2}
        rx={task.barCornerRadius}
        ry={task.barCornerRadius}
        css={[styles.projectTop]}
      />
      <polygon
        css={[styles.projectTop]}
        points={projectLeftTriangle}
        fill={barColor}
      />
      <polygon
        css={[styles.projectTop]}
        points={projectRightTriangle}
        fill={barColor}
      />
    </g>
  );
};
