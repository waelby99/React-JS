import React, { useCallback, useState } from "react";

function EventHandler() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default EventHandler;