import React, {useContext} from "react";
import {ThemeContext} from "../App.jsx";

function Head() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <header style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Toggle Theme
            </button>
        </header>
    );
}
export default Head;