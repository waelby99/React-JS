import React, {useRef, useState, useEffect} from "react";

function CompteurRendu(){
    const renderCount= useRef(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        renderCount.current +=1;
    });
    return (

        <div>
            <p>Render Count: {renderCount.current}</p>

            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Inc</button>
        </div>
    )
}
export default CompteurRendu