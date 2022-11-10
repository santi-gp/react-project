import React, { useState, useEffect } from 'react'

function MouseColour() {
  const [colour, setColour] = useState('#21aeca');
  useEffect(()=>{
    function onMouseMove(e){
      if(e.clientX<window.innerWidth/3){
        setColour('#21aeca');
      }
      else{
        setColour('#1d213a');
      }
    }
    window.addEventListener('mousemove',onMouseMove);
  },[])
  return (
    <div style={{ height: "50vh", background: colour }}></div>
  )
}

function ChangeColour() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(false)}>No mostrar</button>
      {show ? <MouseColour /> : null}
    </>
  )
}

export default ChangeColour