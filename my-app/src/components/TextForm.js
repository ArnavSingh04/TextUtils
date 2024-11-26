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

    const handleClear = ()=>{
      setText("")
    };

    const [text, setText] = useState("");

    return (
      <>
        <div className='container' style={{color : props.mode==='light'?'black':'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value = {text}
              style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='light'?'black':'white'}}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
          <button className="btn btn-primary" onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words, {text.length} characters</p>
          <p>Time to read content = {text.split(" ").length*0.008} minutes</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Text in textbox will show here"}</p>
        </div>
      </>
    );
}