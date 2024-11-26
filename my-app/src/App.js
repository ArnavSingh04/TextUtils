import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {

  const toggleMode = ()=>{
    if (mode==="dark"){
      setMode("light")
      document.body.style.background = 'white';
    }
    else{
      setMode("dark")
      document.body.style.background = '#042743';
    }
  }

  const [mode, setMode] = useState('light');
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse:" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
