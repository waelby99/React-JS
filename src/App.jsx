import Welcome from './components/Welcome.jsx'
import Header from "./components/Header.jsx";
import User from "./components/User.jsx";
import React, {use, useState} from "react";
import Timer from "./components/Timer.jsx";
import DataFetcher from "./components/DataFetcher.jsx";
import Counter from "./components/Counter.jsx";
import TodoList from "./components/TodoList.jsx";
import Content from "./components/Content.jsx";
import Head from "./components/Head.jsx";
import InputWithFocus from "./components/InputWithFocus.jsx";
import CompteurRendu from "./components/CompteurRendu.jsx";
import WithUseMemo from "./components/WithUseMemo.jsx";
import FilteredList from "./components/FilteredList.jsx";

const users=[
    {name:"Wael", age:25},
    {name:"Haithoum",age:26},
    {name:"Yasmine",age:24}
]
export const ThemeContext = React.createContext();

function App() {
    const [count,setCount]= useState(0);
    const [isOn,setIsOn] = useState(false);
    const [theme, setTheme] = useState('light');
  return (
      <div>
          {/* <Welcome name="renekton"/><Header /><Welcome name="yorick"/>
          {users.map((user,index) => (
              <User key={index} name={user.name} age={user.age} />
          ))}

          <p>Count : {count}</p>
          <button onClick={()=>setCount(count+1)}>Increment</button><br/><br/>
          <button style={{backgroundColor:isOn ? 'green': 'red', color:'white',padding:'10px'}}
                  onClick={()=>setIsOn(!isOn)}> {isOn ? 'On':'Off'} </button>

          <Timer />
          <DataFetcher />
          <Counter />
          <TodoList />
          <ThemeContext.Provider value={{ theme, setTheme }}>
              <Head />
              <Content />
          </ThemeContext.Provider>
          <InputWithFocus />
          <CompteurRendu />
          <WithUseMemo />*/}
          <FilteredList/>
      </div>

  )
}

export default App
