import { Task } from "./types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 21),
      name: "Some PathWay",
      id: "PathSample",
      progress: 25,
      type: "project",
      hideChildren: false,
      displayOrder: 1,
      taskType: "UnKnown"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
      name: "Idea",
      id: "Task 0",
      progress: 45,
      type: "task",
      project: "ProjectSample",
      displayOrder: 2,
      taskType: "Draft"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
      name: "Research",
      id: "Task 1",
      progress: 25,
      dependencies: ["Task 0"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 3,
      taskType: "Pending"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 13),
      name: "Discussion with team",
      id: "Task 2",
      progress: 10,
      dependencies: ["Task 1"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 4,
      taskType: "Completed"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 13),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 17),
      name: "Developing",
      id: "Task 3",
      progress: 2,
      dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSample",
      displayOrder: 5,
      taskType: "Cancelled"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 17),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 21),
      name: "Review",
      id: "Task 4",
      type: "task",
      progress: 70,
      dependencies: ["Task 2"],
      project: "ProjectSample",
      displayOrder: 6,
      taskType: "Failed"
    },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end ? projectTasks[0].end : new Date();

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    const endTask = task.end ?? new Date()
    if (end.getTime() < endTask.getTime()) {
      end = endTask;
    }
  }
  return [start, end];
}
