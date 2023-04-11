import React from 'react'
import { Task, ViewMode } from '../types/public-types'
import { initTasks } from '../helper'
import { Gantt } from '../components/gantt/gantt'

const Filter = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Day)
  const [tasks, setTasks] = React.useState<Task[]>(initTasks())
  let columnWidth = 65

  return (
    <div className="Wrapper">
      <h1>Filter page</h1>
      <Gantt
        tasks={tasks}
        viewMode={view}
        listCellWidth={"155px"}
        columnWidth={columnWidth}
      />
    </div>
  )
}
export default Filter
