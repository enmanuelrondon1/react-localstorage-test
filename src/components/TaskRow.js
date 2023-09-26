export const TaskRow = ({task, toggleTask}) => {
  return (
    <tr >
      <td className="d-flex justify-context-between">
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};
