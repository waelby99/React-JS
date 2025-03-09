import React, {useRef} from "react";

function InputWithFocus(){
    const inputRef = useRef(null)
    const handleClick = ()=>{
        inputRef.current.focus();
    };
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    )
}
export default InputWithFocus;