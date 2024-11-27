import React from 'react'
import { firstnum } from '../feature/inputsumSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function InputOne() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
  const  handleclick=()=>{
navigate('/inputtwo')
    dispatch(firstnum())
  }
  return (
    <div>
      <input type='number' value={firstnum} onChange={(e)=>Number(e.target.value)}/>
      <button onClick={handleclick}>next</button>
    </div>
  )
}

export default InputOne
