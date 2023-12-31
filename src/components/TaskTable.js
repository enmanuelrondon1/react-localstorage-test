import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {



  const taskTableRows = (doneValue) => {
    return (
        tasks
        .filter(task => task.done === doneValue)
        .map((task) => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
          ))
    )
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead className="table-primary">
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>

      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
