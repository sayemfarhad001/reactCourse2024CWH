
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* COMPONENTS 1 : Add component with props */}
      {/* <Navbar title="Textutils" aboutText="About Text" /> */}

      <Navbar title="Textutils" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" /> 
      </div>
    </>
  );
}

export default App;
