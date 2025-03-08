import {useReducer} from "react";

const initialState = {count: 0}

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count: state.count+1};
        case 'decrement':
            return {count: state.count-1};
        case 'reset':
            return {count: 0};
        default:
            throw new Error();
    }
}

function Counter(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <p>Count: {state.count}</p>
            <button onClick={()=>dispatch({type:'increment'})}>Incrémenter</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Décrémenter</button>
            <button onClick={()=>dispatch({type:'reset'})}>Ré-initialiser</button>
        </div>
    )
}

export default Counter;