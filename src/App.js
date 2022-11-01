import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light '); //Whether dark mode is enable or not 
  const [alert , setAlert] = useState(null);

  const showAlert = (message ,type)=>{
    setAlert({
      msg : message ,
      type : type
    })


  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }


  const toogleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg'+ cls)
    if(mode === 'light'){

      setMode ('dark')
      document.body.style.backgroundColor = "#102458";
      showAlert("Dark Mode has been enabled ", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtil is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = ' Install TextUtil Now!!';
      // }, 1500);
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = "White";
      showAlert("Light Mode has been enabled ", "success");
      // document.title = 'TextUtils - Light Mode';
    }

  }

  return (
    <>   
   {/* <Navbar title="TextUtils" aboutText ="About TextUtils"/> */}
   {/* <Navbar/> */}
  <Router>
          <Navbar title="TextAnalyzer" mode = {mode} toogleMode ={toogleMode}/>
            <Alert alert={alert}/>
          <div className="container my-3">
          <Routes>
              <Route  exact path="/about" element = {<About mode = {mode} />}/>
              <Route  exact path="/" element = {
              <TextForm heading= "Try TextAnalyzer -Word Counter ,Character Counter , Remove Spaces "  mode = {mode} />}/>
        </Routes>
         
                
           
           
           {/* <About/> */}
          
          </div>
          </Router>
    </>
  );
}

export default App;
