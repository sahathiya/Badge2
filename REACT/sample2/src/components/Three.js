import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  increment3 } from '../feature/sumSlice'
import { useNavigate } from 'react-router-dom'
function Three() {
    const value=useSelector(state=>state.sum.three)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate('/sum')
  dispatch(increment3())
    }
  return (
    <div>
      <h1>value:{value}</h1>
      <button onClick={handleclick}>total</button>
    </div>
  )
}

export default Three
