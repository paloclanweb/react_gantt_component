import React, { useMemo } from 'react'
import tw, { css } from 'twin.macro'

import { Task } from '../../types/public-types'

const localeDateStringCache: { [key: string]: string } = {}
const toLocaleDateStringFactory =
  (locale: string) =>
  (date: Date, dateTimeOptions: Intl.DateTimeFormatOptions) => {
    if(date){
      const key = date.toString()
      let lds = localeDateStringCache[key]
      if (!lds) {
        lds = date.toLocaleDateString(locale, dateTimeOptions)
        localeDateStringCache[key] = lds
      }
      return lds
    }
    
  }
const dateTimeOptions: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const styles = {
  taskListWrapper: tw`table pt-[0.15rem] border-l-[#e6e4e4] border-l-[solid] border-b-[#e6e4e4] border-b-[solid]`,
  taskListTableRow: css`
    ${tw`table-row text-ellipsis`};
    &:nth-of-type(even) {
      background-color: #fff;
    }
  `,
  taskListCell: tw`table-cell overflow-hidden align-middle whitespace-nowrap text-ellipsis`,
  taskListNameWrapper: tw`flex`,
  taskListExpander: tw`text-[rgb(86_86_86)] text-[0.6rem] select-none cursor-pointer pt-[0.15rem] pb-0 px-[0.2rem]`,
  taskListEmptyExpander: tw`text-[0.6rem] select-none pl-4`,
}

export const TaskListTableDefault: React.FC<{
  rowHeight: number
  rowWidth: string
  fontFamily: string
  fontSize: string
  locale: string
  tasks: Task[]
}> = ({ rowHeight, rowWidth, tasks, fontFamily, fontSize, locale }) => {
  const toLocaleDateString = useMemo(
    () => toLocaleDateStringFactory(locale),
    [locale],
  )

  return (
    <div
      css={[styles.taskListWrapper]}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      {tasks.map(t => {
        let expanderSymbol = ''
        if (t.hideChildren === false) {
          expanderSymbol = '▼'
        } else if (t.hideChildren === true) {
          expanderSymbol = '▶'
        }

        return (
          <div
            css={[styles.taskListTableRow]}
            style={{ height: rowHeight }}
            key={`${t.id}row`}
          >
            <div
              css={[styles.taskListCell]}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
              }}
              title={t.name}
            >
              <div css={[styles.taskListNameWrapper]}>
                <div>{expanderSymbol}</div>
                <div>{t.name}</div>
              </div>
            </div>
            <div
              css={[styles.taskListCell]}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
              }}
            >
              &nbsp;{toLocaleDateString(t.start, dateTimeOptions)}
            </div>
            <div
              css={[styles.taskListCell]}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
              }}
            >
              &nbsp;{toLocaleDateString(t.end ?? new Date(), dateTimeOptions)}
            </div>
          </div>
        )
      })}
    </div>
  )
}
