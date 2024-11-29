import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const toggleMode = ()=>{
    if (mode==="dark"){
      setMode("light")
      document.body.style.background = 'white';
      showAlert('Light mode has been Enabled!', 'success');
      document.title = 'TextUtils - Light Mode';
    }
    else{
      setMode("dark")
      document.body.style.background = '#042743';
      showAlert('Dark mode has been Enabled!', 'success');
      document.title = 'TextUtils - Dark Mode'
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(()=>setAlert(null), 1500)
  };

  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <TextForm heading="Enter the text to analyse:" mode={mode} showAlert={showAlert} />
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyse:" mode={mode} showAlert={showAlert} />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
