import React, { SyntheticEvent, useRef, useEffect } from "react";
import tw from "twin.macro";
const styles = {
  scrollWrapper: tw`overflow-auto max-w-full h-[1.2rem]`,
  scroll: tw`h-px`,
}
export const HorizontalScroll: React.FC<{
  scroll: number;
  svgWidth: number;
  taskListWidth: number;
  rtl: boolean;
  onScroll: (event: SyntheticEvent<HTMLDivElement>) => void;
}> = ({ scroll, svgWidth, taskListWidth, rtl, onScroll }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scroll;
    }
  }, [scroll]);

  return (
    <div
      dir="ltr"
      style={{
        margin: rtl
          ? `0px ${taskListWidth}px 0px 0px`
          : `0px 0px 0px ${taskListWidth}px`,
      }}
      css={[styles.scrollWrapper]}
      onScroll={onScroll}
      ref={scrollRef}
    >
      <div style={{ width: svgWidth }} css={[styles.scroll]} />
    </div>
  );
};
