import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
      let newText = text.toUpperCase()
      setText(newText);
    };
    
    const handleLowClick = () => {
      let newText = text.toLocaleLowerCase()
      setText(newText);
    };
    
    const handleOnChange = (event)=>{
      setText(event.target.value)
    };

    const [text, setText] = useState("");
    return (
      <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value = {text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary" onClick={handleLowClick}>Convert to LowerCase</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>Time to read content = {text.split(" ").length*0.008} minutes</p>
      </div>
      <h2>Preview</h2>
      <p>{text}</p>
      </>
    );
}