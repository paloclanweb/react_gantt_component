import React from 'react'
import tw, { css } from 'twin.macro'
import { Columns } from "../../types/public-types";

const styles = {
  ganttTable: tw`table border-l-[#e6e4e4] border-l-[solid] border-y-[#e6e4e4] border-y-[solid]`,
  ganttTable_Header: css`
    ${tw`table-row`};
    list-style: none;
  `,
  ganttTable_HeaderSeparator: tw`opacity-100 -ml-0.5 border-r-[rgb(196,196,196)] border-r `,
  ganttTable_HeaderItem: css`
    ${tw`table-cell align-middle`};
    vertical-align: -webkit-baseline-middle;
  `,
}

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number
  rowWidth: string
  fontFamily: string
  fontSize: string,
  columns: Columns[]
}> = ({ headerHeight, fontFamily, fontSize, rowWidth, columns }) => {
  return (
    <div
      css={[styles.ganttTable]}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      <div
        css={[styles.ganttTable_Header]}
        style={{
          height: headerHeight - 2,
        }}
      >
        <div
          css={[styles.ganttTable_HeaderItem]}
          style={{
            minWidth: rowWidth,
          }}
        >
          &nbsp;Name
        </div>
        
        {
          columns.map(({key, value})=>{
            return(
              <React.Fragment key={key}>
                <div
                  css={[styles.ganttTable_HeaderSeparator]}
                  style={{
                    height: headerHeight * 0.5,
                    marginTop: headerHeight * 0.2,
                  }}
                />
                <div
                  css={[styles.ganttTable_HeaderItem]}
                  style={{
                    minWidth: rowWidth,
                  }}
                >
                  &nbsp;{value}
                </div>
              </React.Fragment>
          )})
        }

        <div
          css={[styles.ganttTable_HeaderSeparator]}
          style={{
            height: headerHeight * 0.5,
            marginTop: headerHeight * 0.2,
          }}
        />
        <div
          css={[styles.ganttTable_HeaderItem]}
          style={{
            minWidth: rowWidth,
          }}
        >
          &nbsp;From
        </div>
        <div
          css={[styles.ganttTable_HeaderSeparator]}
          style={{
            height: headerHeight * 0.5,
            marginTop: headerHeight * 0.25,
          }}
        />
        <div
          css={[styles.ganttTable_HeaderItem]}
          style={{
            minWidth: rowWidth,
          }}
        >
          &nbsp;To
        </div>
      </div>
    </div>
  )
}
