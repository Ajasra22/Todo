import React from "react";
import { MdDeleteOutline } from 'react-icons/md';
function Note(props) {
  function clicked(events) {
    props.ondelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="container" style={{ backgroundColor: "white", size: 200}}><button style={{ backgroundColor: "white",color: "black", size: 200}} onClick={clicked}>
      <MdDeleteOutline/>
      </button></div>
    </div>
  );
}

export default Note;