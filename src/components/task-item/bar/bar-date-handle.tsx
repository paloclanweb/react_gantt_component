import React from "react";
import styles from "./bar.module.css";

type BarDateHandleProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  barCornerRadius: number;
};
export const BarDateHandle: React.FC<BarDateHandleProps> = ({
  x,
  y,
  width,
  height,
  barCornerRadius,
}) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      ry={barCornerRadius}
      rx={barCornerRadius}
    />
  );
};
