import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeitem,edititem } from '../../feature/inputSlice'
function InputList() {
  const items=useSelector(state=>state.todo.items)
  const dispatch=useDispatch()
  // const sortedItems = [...items].sort()
  const sortedItems = [...items].sort((a, b) => a.text.localeCompare(b.text));
  return (
    <div>
      {sortedItems.map((item,index)=>(
        <li key={item.id}>{item.text}
        <button onClick={()=>dispatch(removeitem(item.id))}>delete</button>
        <button onClick={()=>dispatch(edititem(item.id))}>edit</button>
        </li>
      ))}
      
    </div>
  )
}

export default InputList
