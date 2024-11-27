import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment2 } from '../feature/sumSlice'
import { useNavigate } from 'react-router-dom'
function Two() {
    const value=useSelector(state=>state.sum.two)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate('/three')
  dispatch(increment2())
    }
  return (
    <div>
      <h1>count value :{value}</h1>
      <button onClick={handleclick}>next</button>
    </div>
  )
}

export default Two
