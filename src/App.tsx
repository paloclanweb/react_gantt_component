import React, { useEffect, useState } from 'react'
import { Task, ViewMode } from './types/public-types'
import { initTasks } from './helper'
import { assignEndDates, latestStartDate } from './helpers/date-helper'
import { Gantt } from './components/gantt/gantt'

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initTasks())
  const [endDatesAssigned, setEndDatesAssigned] = useState<boolean>(false); 
  
  let columnWidth = 65

  // useEffect(() => {    
  //      const latestStart =  latestStartDate(tasks)
  //      setTasks((prevTasks: Task[]) => assignEndDates(prevTasks, latestStart)) 
  //      setEndDatesAssigned(true);   
   
  // }, [])
  useEffect(() => {

    const sortedTasks = tasks.sort((a, b) => a.displayOrder - b.displayOrder);

    let currentDate = new Date();

    sortedTasks.forEach((task, index) => {
      if (index === 0) {
        task.start = task.start || new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      } else {
        task.start = task.start || sortedTasks[index - 1].end;
      }

      if (!task.end && !!task.start) {
        task.end = new Date(task.start);
        task.end.setDate(task.start.getDate() + 4);
      }
    });

    sortedTasks[0].end = sortedTasks[sortedTasks.length - 1].end;

    setTasks(sortedTasks);
    setEndDatesAssigned(true);
  }, []);
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
