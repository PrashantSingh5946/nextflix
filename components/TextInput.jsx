import React from 'react'
import { useState } from 'react/cjs/react.production.min'

export default function TextInput(label, placeholder, id) {
    const [active,setActive] = useState(false);
  return (
    <div>
        <label >{label}</label>
        <input type="text" id={id}></input>
    </div>
  )
}
