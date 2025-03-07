import Welcome from './components/Welcome.jsx'
import Header from "./components/Header.jsx";
import User from "./components/User.jsx";
import {use, useState} from "react";

const users=[
    {name:"Wael", age:25},
    {name:"Haithoum",age:26},
    {name:"Yassine",age:24}
]

function App() {
    const [count,setCount]= useState(0);
    const [isOn,setIsOn] = useState(false);
  return (
      <div>
      <Welcome name="renekton"/><Header /><Welcome name="yorick"/>
          {users.map((user,index) => (
              <User key={index} name={user.name} age={user.age} />
          ))}

          <p>Count : {count}</p>
          <button onClick={()=>setCount(count+1)}>Increment</button><br/><br/>
          <button style={{backgroundColor:isOn ? 'green': 'red', color:'white',padding:'10px'}}
                  onClick={()=>setIsOn(!isOn)}> {isOn ? 'On':'Off'} </button>
      </div>

  )
}

export default App
