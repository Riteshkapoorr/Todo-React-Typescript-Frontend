import TaskCategory from "./TaskCategory";
import {
  useDispatch,
  UseDispatch,
  UseSelector,
  useSelector,
} from "react-redux";

import { RootState } from "../../ReduxComp/store";

interface Todo {
  label: string;
  name: string;
  dateAdded: string;
  desc: string;
}
function TaskList() {
  const todos = useSelector((state: RootState) => state.todos);

  //   Group tasks by label
  const groupedTasks = todos.reduce((acc, task) => {
    if (!acc[task.label]) {
      acc[task.label] = [];
    }
    acc[task.label].push(task);
    return acc;
  }, {} as Record<string, Todo[]>);
  // console.log("this grounded tasks: ", groupedTasks);

  return (
    <div>
      {Object.keys(groupedTasks).map((label, index) => {
        {
          console.log(" i am in task list", label);
        }
        return (
          <TaskCategory key={index} label={label} tasks={groupedTasks[label]} />
        );
      })}
    </div>
  );
}
export default TaskList;
