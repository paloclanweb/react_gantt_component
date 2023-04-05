import React from "react";
import { getStartEndDateForProject, initTasks } from "./helper";
import { Task, ViewMode } from "./types/public-types";
import { Gantt } from "./components/gantt/gantt";

// Init
const App = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = React.useState<Task[]>(initTasks());
  let columnWidth = 65;

  return (
    <div className="Wrapper">
      <Gantt
        tasks={tasks}
        viewMode={view}
        listCellWidth={"155px"}
        columnWidth={columnWidth}
      />
    </div>
  );
};

export default App;
