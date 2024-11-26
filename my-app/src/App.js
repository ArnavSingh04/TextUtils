import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyse:" /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
