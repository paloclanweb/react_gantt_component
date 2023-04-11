import React, { useEffect, useState } from 'react'
import { Task, ViewMode } from './types/public-types'
import { initTasks } from './helper'
import { assignEndDates, latestStartDate } from './helpers/date-helper'
import { Gantt } from './components/gantt/gantt'

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initTasks())
  const [endDatesAssigned, setEndDatesAssigned] = useState<boolean>(false); 
  
  let columnWidth = 65

  useEffect(() => {    
       const latestStart =  latestStartDate(tasks)
       setTasks(assignEndDates(tasks, latestStart)) 
       setEndDatesAssigned(true);   
   
  }, [])
  return (
    <div className="Wrapper">
      {endDatesAssigned && ( 
        <Gantt
          tasks={tasks}
          viewMode={ViewMode.Day}
          listCellWidth={"155px"}
          columnWidth={columnWidth}
        />
      )}
    </div>
  )
}
export default App
