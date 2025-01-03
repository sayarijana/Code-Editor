import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { MdCloseFullscreen } from "react-icons/md";
import { MdOpenInFull } from "react-icons/md";
import './Editor.css'


import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor({displayName,language,value,onChange}) {

  const [open,setOpen]=useState(true);  

  function changeHandler(editor,data,value){
    onChange(value);
  }  


  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}` }>
      <div className='editor-title'>
        {displayName}
        <button onClick={()=>setOpen((prev) => !prev)}>
            {open ? <MdCloseFullscreen />: <MdOpenInFull />}
        </button>
      </div>
      <ControlledEditor 
        onBeforeChange={changeHandler}
        value={value}
        className='code-mirror-wrapper'
        options={
            {
                lineWrapping:true,
                lint:true,
                mode:language,
                lineNumbers:true,
                theme:'material'
                
            }
        }
      />
    </div>
  )
}


