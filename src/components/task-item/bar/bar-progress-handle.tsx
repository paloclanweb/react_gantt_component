import React from "react";
import styles from "./bar.module.css";

type BarProgressHandleProps = {
  progressPoint: string;
};
export const BarProgressHandle: React.FC<BarProgressHandleProps> = ({
  progressPoint,
}) => {
  return (
    <polygon
      points={progressPoint}
    />
  );
};
