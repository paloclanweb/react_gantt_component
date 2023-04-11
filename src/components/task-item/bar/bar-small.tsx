import React from 'react'
import { getProgressPoint } from '../../../helpers/bar-helper'
import { BarDisplay } from './bar-display'
import { BarProgressHandle } from './bar-progress-handle'
import { TaskItemProps } from '../task-item'
import tw, { css } from 'twin.macro'
const styles = {
  barWrapper: css`
    ${tw`cursor-pointer`} hover:visible hover:opacity-100;
    outline: none;
  `,
}

export const BarSmall: React.FC<TaskItemProps> = ({
  task,
  isProgressChangeable,
  isDateChangeable,
}) => {
  const progressPoint = getProgressPoint(
    task.progressWidth + task.x1,
    task.y,
    task.height,
  )
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
  )
}
