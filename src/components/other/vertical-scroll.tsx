import React, { SyntheticEvent, useRef, useEffect } from "react";
import tw, {css} from "twin.macro";

const styles = {
  scroll: css`
  ${tw`w-4 shrink-0`}
  & {
    ::-webkit-scrollbar {
      ${tw`w-[1.1rem] h-[1.1rem]`}
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      ${tw`bg-clip-padding rounded-[10px] border-[6px] border-solid border-transparent hover:bg-clip-padding hover:border-4 hover:border-solid hover:border-transparent`};
      background: rgba(0, 0, 0, 0.2);
      background: var(--palette-black-alpha-20, rgba(0, 0, 0, 0.2));
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.3);
      background: var(--palette-black-alpha-30, rgba(0, 0, 0, 0.3));
    }
  }`,
}

export const VerticalScroll: React.FC<{
  scroll: number;
  ganttHeight: number;
  ganttFullHeight: number;
  headerHeight: number;
  rtl: boolean;
  onScroll: (event: SyntheticEvent<HTMLDivElement>) => void;
}> = ({
  scroll,
  ganttHeight,
  ganttFullHeight,
  headerHeight,
  rtl,
  onScroll,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scroll;
    }
  }, [scroll]);

  return (
    <div
      style={{
        height: ganttHeight,
        marginTop: headerHeight,
        marginLeft: rtl ? "" : "-1rem",
      }}
      css={[styles.scroll]}
      onScroll={onScroll}
      ref={scrollRef}
    >
      <div style={{ height: ganttFullHeight, width: 1 }} />
    </div>
  );
};
