import React from "react";
import tw from "twin.macro";

type BarDisplayProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  /* progress start point */
  progressX: number;
  progressWidth: number;
  barCornerRadius: number;
  styles: {
    backgroundColor: string;
    backgroundSelectedColor: string;
    progressColor: string;
    progressSelectedColor: string;
  };
  
};
const stylesTwin = {
  barBackground: tw`select-none stroke-0`,
}
export const BarDisplay: React.FC<BarDisplayProps> = ({
  x,
  y,
  width,
  height,
  progressX,
  progressWidth,
  barCornerRadius,
  styles,
}) => {
  const getProcessColor = () => {
    return styles.progressColor;
  };

  const getBarColor = () => {
    return styles.backgroundColor;
  };

  return (
    <g>
      <rect
        x={x}
        width={width}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getBarColor()}
        css={[stylesTwin.barBackground]}
      />
      <rect
        x={progressX}
        width={progressWidth}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={getProcessColor()}
      />
    </g>
  );
};
