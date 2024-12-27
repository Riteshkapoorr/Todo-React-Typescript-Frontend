import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../ReduxComp/todoSlice";
interface Task {
  label: string;
  name: string;
  desc: string;
  dateAdded: string;
}

interface TaskCategoryProps {
  label: string;
  tasks: Task[];
}

function TaskCategory({ label, tasks }: TaskCategoryProps) {
  const [isOpen, setIsOpen] = useState(false); // Toggle collapse of task list
  const [selectedTask, setSelectedTask] = useState<Task | null>(null); // Track the selected task

  const dispatch = useDispatch();
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setSelectedTask(null); // Reset task details when collapsing
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task); // Set the selected task
  };

  return (
    <div className="task-container container">
      {/* Left side with label buttons */}
      <div className="task-list">
        <button
          className="btn btn-dark mb-2"
          type="button"
          onClick={toggleCollapse}
        >
          {label}
        </button>
        <div className={`collapse ${isOpen ? "show" : ""}`}>
          <div className="card card-body">
            {tasks.map((task, index) => (
              <div key={index}>
                <button
                  className="btn btn-outline-secondary mb-2 task-btn"
                  onClick={() => handleTaskClick(task)}
                >
                  {task.name} {task.dateAdded}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side with task details */}
      <div className="task-details-container">
        {selectedTask ? (
          <div className="task-details">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-danger del-button"
                onClick={() => {
                  dispatch(removeTodo(selectedTask));
                  setSelectedTask(null);
                }}
              >
                X
              </button>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <p className="task-name">
                <strong>{selectedTask.name}</strong>
              </p>
              <p className="task-date">{selectedTask.dateAdded}</p>
            </div>
            <p className="task-desc">{selectedTask.desc}</p>
          </div>
        ) : (
          <div className="task-placeholder">Select a task to view details</div>
        )}
      </div>
    </div>
  );
}

export default TaskCategory;
