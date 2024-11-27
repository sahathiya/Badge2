import React from 'react'
import { submitvalue,inputvalue } from '../../feature/inputSlice'
import { useDispatch, useSelector } from 'react-redux'

function Inputs() {
    const dispatch=useDispatch()
 const value=useSelector((state)=>state.todo.inputvalue)
 
  return (
    <div>
      <input type='text' placeholder='enter' value={value} onChange={(e)=>dispatch(inputvalue(e.target.value))}/>
      <button onClick={()=>dispatch(submitvalue())}>submit</button>
    </div>
  )
}

export default Inputs
