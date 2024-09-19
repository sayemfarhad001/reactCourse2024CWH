
import './App.css';
import React, {useState} from "react";

//ROUTER 1 : npm install react-router-dom
// Then import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

  // const toggleMode = ()=>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert('Dark mode has been enabled!', 'success');
  //     // document.title = 'Text Analyzer - Dark Mode';
  //     // setInterval(()=>{
  //     //   document.title = 'Text Analyzer is amazing';
  //     // }, 2000);
  //     // setInterval(()=>{
  //     //   document.title = 'Install it now...';
  //     // }, 1500);
  //   } else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert('Light mode has been enabled!', 'success');
  //     // document.title = 'Text Analyzer - Light Mode'
  //   }
  // }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-info')
  }

  const toggleColor = (cls)=> {
    //primary, secondary, success, danger, warning, info, light, dark, muted, white
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    showAlert('Theme has been updated!', 'success');



    switch (cls) {
      case 'primary':
        setMode('dark');        
        break;
      case 'success':
        setMode('dark');
        break;
      case 'danger':
        setMode('dark');
        break;
      case 'warning':
        setMode('light');
        break;
      case 'secondary':
        setMode('dark');
        break;
      case 'info':
        setMode('light');
        break;
      case 'dark':
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert('Dark mode has been enabled!', 'success');
        break;   
      default:
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode has been enabled!', 'success');

    }
  }

  return (
    <>
      <Router>

        {/* COMPONENTS 1 : Add component with props */}
        {/* <Navbar title="Textutils" aboutText="About Text" /> */}

        {/* <Navbar title="Utility" aboutText="About" mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} /> */}

        <Navbar title="TA" aboutText="About" mode={mode} toggleColor={toggleColor} />
        <Alert alert={alert}/>

        <div className="container my-3">
          {/* ROUTER 2 : apply router */}
          {/* always use 'exact' attribute as router does partial match */}
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Text Analyzer - Word Counter, Character Counter, Remove Extra Spaces  " mode={mode}/>}/>
            <Route exact path="/about" element={<About mode={mode}/>}/>          
          </Routes>         
        </div>

      </Router>
    </>
  );
}

export default App;
