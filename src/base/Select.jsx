import React, { useState } from 'react'
import classes from './appear.module.css'

const Select = (props) => {
  const [val1, setVal1] = useState('');
    const ar = ['rus', 'use','czr'];
    const options = ar.map((text, index)=>{
        return <option key={index}>{text}</option>
    })
    console.log(options.text);

    

    return (
    
    <select className = {classes.Sel1}  value={val1} onChange={(e)=>setVal1(e.target.value)}>
        {options}
        </select> 
  
  
  )

}

export default Select
