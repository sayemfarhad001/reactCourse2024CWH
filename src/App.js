
import './App.css';
import React, {useState} from "react";
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');    //Whether dark or light
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);  
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled!', 'success');
      document.title = 'Text Analyzer - Dark Mode'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled!', 'success');
      document.title = 'Text Analyzer - Light Mode'
    }

  }

  return (
    <>
      {/* COMPONENTS 1 : Add component with props */}
      {/* <Navbar title="Textutils" aboutText="About Text" /> */}

      <Navbar title="Utility" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>

      <div className="container my-3">
        {/* <About /> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
      </div>
    </>
  );
}

export default App;
