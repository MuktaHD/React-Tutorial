// import {Fragment} from 'react'
import './App.css';
// import Button from './components/Button';
import Navbar from './components/Navbar';
// import GreetingByFunction from './components/GreetingByFunction';
// import GreetingByClass from './components/GreetingByClass';
// import Counter from './components/Counter';
// import Tabular from './components/Tabular';
// import ReactTabular from './components/ReactTabular';
// import Calculator from './components/Calculator';
// import ClassButton from './components/ClassButton';
import Login from './components/Login';
import { useState } from'react';
import Register from './components/Register';

import 'react-toastify/dist/ReactToastify.css';
  function App() {
    const [view,setView]=useState("register")
    
   

    // const txtStyle = { fontSize: "20px" };
    // const fruits = ["Mango", "Apple", "Chickoo"];
    // const cars = ["Tata", "MG", "Kia"];

  return (

    <>
     <div>
            <Navbar setView={setView} />
            {view === 'register' && <Register setView={setView} />}
            {view === 'login' && <Login setView={setView} />}
        </div>
    {/* <div className="container">
        <h1 style={{ textAlign: "center" }}>Welcome to React</h1>
        <Button data="Register" />
        <Button data="Login" />
        <Button data="More Info" />
        <GreetingByFunction name="Sai" />
        <GreetingByClass name="Mukta" />
      </div>
      <ul>{fruits.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul> 
      <div>{cars.map((value, index) => (
          <h3 key={index} style={{ textAlign: "center" }}>
            {value}
          </h3>
        ))}
      </div> */}

       {/* <ClassButton name="LOGIN"/>
      <ClassButton name="REGISTER " /> */}
   {/* <Counter /> */}
   <br></br> <hr></hr>
   {/* <Tabular /> */}
   {/* <ReactTabular /> */}
   {/* <Login /> */}
   {/* {showLogin ? <Login /> : <Register />} */}
   {/* <Calculator /> */}
  
    </>
  );
}

export default App;

