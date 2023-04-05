import { Task } from "../types/public-types";

function getChildren(taskList: Task[], task: Task) {
  let tasks: Task[] = [];
  if (task.type !== "project") {
    tasks = taskList.filter(
      t => t.dependencies && t.dependencies.indexOf(task.id) !== -1
    );
  } else {
    tasks = taskList.filter(t => t.project && t.project === task.id);
  }
  var taskChildren: Task[] = [];
  tasks.forEach(t => {
    taskChildren.push(...getChildren(taskList, t));
  })
  tasks = tasks.concat(tasks, taskChildren);
  return tasks;
}
