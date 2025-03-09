import {useContext} from "react";

function Content() {
    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#222', color: theme === 'light' ? '#000' : '#fff' }}>
            <p>Welcome to my app!</p>
        </div>
    );
}
export default Content;