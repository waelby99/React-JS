import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskSlice";

function TaskForm() {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addTask({ id: Date.now(), text: data.task, completed: false }));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                {...register("task", { required: "Task is required" })}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
}
export default TaskForm;