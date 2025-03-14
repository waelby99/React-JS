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
import EventHandler from "./components/EventHandler.jsx";
import InteractiveList from "./components/InteractiveList.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Details from "./components/Details.jsx";
import CartProvider from "./components/CartContext.jsx";
import Cart from "./components/Cart.jsx";
import store from "./components/store.js";
import {Provider} from "react-redux";
import Navbar from "./components/Navbar.jsx";
import DataFetching from "./components/DataFetching.jsx";
import StyledButton from "./components/StyledButton.jsx";
import LoginForm from "./components/LoginForm.jsx";
import LoginFormHook from "./components/LoginFormHook.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

/*const users=[
    {name:"Wael", age:25},
    {name:"Haithoum",age:26},
    {name:"Yasmine",age:24}
]*/
export const ThemeContext = React.createContext();

function App() {
    /*const [count,setCount]= useState(0);
    const [isOn,setIsOn] = useState(false);
    const [theme, setTheme] = useState('light');*/
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
          <WithUseMemo />
          <FilteredList/>
          <EventHandler/>
          <InteractiveList />
<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details/:id" element={<Details />} />

    </Routes>
</Router>
          <CartProvider>
              <Header/>
                <Dashboard/>
            <Cart/>
          </CartProvider>
          <Provider store={store}>
              <Navbar />
              <Dashboard />
              <Cart />
          </Provider>

          <StyledButton />
          <DataFetching/>
          <LoginForm />
          <LoginFormHook/>*/}
          <h1>Task Manager</h1>
          <TaskForm />
          <TaskList />
      </div>

  )
}

export default App
