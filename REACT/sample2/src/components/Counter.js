import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import { increment,decrement,reset,incrementbynumber } from '../feature/counterSlice';
function Counter() {
    const[incrementby,setIncrementby]=useState()
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>counter:{count}</h1>
      <div>
      <button onClick={()=>dispatch(increment())}>increment</button>
      
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      
      <button onClick={()=>dispatch(reset())}>reset</button>
      </div>
      <div>
        <input
        type='number'
        value={incrementby}
        onChange={(e)=>setIncrementby(Number(e.target.value))}
        />
      </div>
      <button onClick={()=>dispatch(incrementbynumber(incrementby))}>incrementbynumber</button>
      
      
    </div>
  )
}

export default Counter
