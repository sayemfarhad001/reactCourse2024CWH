
import './App.css';
import React, {useState} from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');    //Whether dark or light

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }

  return (
    <>
      {/* COMPONENTS 1 : Add component with props */}
      {/* <Navbar title="Textutils" aboutText="About Text" /> */}

      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        {/* <About /> */}
        <TextForm heading="Enter the text to analyze below" mode={mode}/> 
      </div>
    </>
  );
}

export default App;
