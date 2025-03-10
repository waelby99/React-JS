import React, { useMemo, useState } from "react";

function FilteredList() {
    const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Date"]);
    const [filter, setFilter] = useState("");

    const filteredItems = useMemo(() => {
        console.log("Filtering items...");
        return items.filter((item) => item.toLowerCase().includes(filter.toLowerCase()));
    }, [items, filter]);

    return (
        <div>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter items"
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default FilteredList;