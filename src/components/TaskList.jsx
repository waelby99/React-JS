import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../actions/taskSlice.js";

function TaskList() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span
                        style={{ textDecoration: task.completed ? "line-through" : "none" }}
                        onClick={() => dispatch(toggleTask(task.id))}
                    >
                        {task.text}
                    </span>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
export default TaskList;