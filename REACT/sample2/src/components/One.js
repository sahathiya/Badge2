import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment1 } from '../feature/sumSlice'
import { useNavigate } from 'react-router-dom'
function One() {
    const countvalue=useSelector(state=>state.sum.one)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate('/two')
        dispatch(increment1())
    }
  return (
    <div>
      <h1>count value:{countvalue}</h1>
      <button onClick={handleclick}>next</button>
    </div>
  )
}

export default One
