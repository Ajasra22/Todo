import React from "react";
import "./App.css"
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import  { useState } from 'react'
import Navbar from "./Navbar";
function App() {
  const [mode,setMode]=useState("light");
  const toggleMode = ()=>{
    if(mode==="dark") {
      setMode("light");
      document.body.style.background= "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(19,121,9,1) 23%, rgba(0,212,255,1) 100%)";
    }
    else
    {
      setMode("dark");
     document.body.style.background= "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,118,0.8046568969384629) 1%, rgba(138,255,0,1) 97%)";
    }
  }
  const [notes, setNote] = useState([]);
  function addnote(newnote) {
    console.log(newnote);
    setNote((prevnote) => {
      return [...prevnote, newnote];
    });
  }
  function deleted(id) {
    console.log("value triggered ");
    setNote((preval) => {
      return preval.filter((notesnow, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
     <Navbar title="Todo List" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <div  style={{padding: 0,margin: 0}}>
      <CreateArea onadd={addnote} />
      {notes.map((noteitem, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={noteitem.title}
            content={noteitem.content}
            ondelete={deleted}
          />
        );
      })}
      <Footer />
    </div>
    </>
  );
}

export default App;