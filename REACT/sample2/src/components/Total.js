import React from 'react'
import { useSelector } from 'react-redux'
function Total() {
    const total=useSelector(state=>state.sum.total)
  return (
    <div>
      <h1>TOTAL:{total}</h1>
    </div>
  )
}

export default Total
