import React, { useState, useMemo } from "react";

function WithUseMemo() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(0);

    // Mémorisation du calcul : ne se recalcule que si `count` change
    const square = useMemo(() => {
        console.log("Calculating square...");
        return count * count;
    }, [count]);

    return (
        <div>
            <p>Square of count: {square}</p>
            <p>Count: {count}</p>
            <button
                onClick={() => {
                    console.log("Bouton 'Increment Count' cliqué !");
                    setCount(count + 1);
                }}
            >
                Increment Count
            </button>

            <p>Other State: {otherState}</p>
            <button
                onClick={() => {
                    console.log("Bouton 'Increment Other State' cliqué !");
                    setOtherState(otherState + 1);
                }}
            >
                Increment Other State
            </button>
        </div>
    );
}

export default WithUseMemo;
