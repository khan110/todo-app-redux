import { useDispatch } from "react-redux"
import React,{ useState } from 'react'
import {addtodo}from "../store/actions";
import Viewtodo from "./viewtodo";

export default function Addtodo() {
      const [title, setTitle] = useState('');
      const dispatch = useDispatch()

      const handleSubmit = (e) => {
           e.preventDefault()
           console.log('i am in submit')
           let newObj = {title: title, id:Math.random()*Math.random()}
           dispatch(addtodo(newObj))
 

      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id='title' onChange={(e)=>setTitle(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            <Viewtodo/>
        </div>
    )
}
