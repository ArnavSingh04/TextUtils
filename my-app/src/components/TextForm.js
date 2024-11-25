import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <div className="mb-3">
        <label for="myBox" className="form-label">{props.title}</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
  )
}
