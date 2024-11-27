import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Fetchdata } from '../feature/fetchSlice'
function FetchDisplay() {
    const {users,status}=useSelector((state)=>state.users)
 const dispatch=useDispatch()
    useEffect(()=>{
        if(status==='idle'){
            dispatch(Fetchdata())
        }
    
    },[])
    if(status==='pending'){
        return <p>loading....</p>
    }

    if(status==='failed'){
        return <p>fetch failed</p>
    }
  return (
    <ol>
      {users.map((user)=>(
        
            <li key={user.id}>{user.name}</li>

        
      ))}
    </ol>
  )
}

export default FetchDisplay
