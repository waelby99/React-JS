import {useEffect, useState} from "react";

function Timer(){
    const [time,setTime]= useState(new Date());
    useEffect(() => {
        const interval = setInterval(()=> setTime(new Date()),1000);
        return () => clearInterval(interval);
    }, []);
    return <p>Current time : {time.toLocaleTimeString()}</p>
}
export default Timer;