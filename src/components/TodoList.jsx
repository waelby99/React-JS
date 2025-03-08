import {useReducer, useState} from "react";
import Header from "./Header.jsx";

const initialState = { todos: [] };

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return { todos: [...state.todos, action.payload] };
        case 'REMOVE_TODO':
            return { todos: state.todos.filter((_, index) => index !== action.payload) };
        default:
            throw new Error();
    }
}

function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: input });
        setInput('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {state.todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: index })}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}
export default TodoList;