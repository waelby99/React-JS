import React, { useCallback, useState } from "react";

function InteractiveList() {
    const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

    const removeItem = useCallback((itemToRemove) => {
        setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
    }, []);

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item}>
                        {item}
                        <button onClick={() => removeItem(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default InteractiveList;