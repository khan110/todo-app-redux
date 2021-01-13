import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetodo } from '../store/actions'

export default function Viewtodo() {

    const todos = useSelector( state => state )
    const dispatch = useDispatch()

    return (
        <div>
            {
                todos.map((item)=>(
                    <> 
                    <div key={item.id}> {item.title} </div>
                    <button key={item.id+1} onClick={()=>dispatch(deletetodo(item.id))}>X</button>
                    </>

                ))
            }
            
        </div>
    )
}
