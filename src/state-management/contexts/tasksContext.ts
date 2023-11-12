import { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";
import React from "react";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
