const initialState = [
    {title: 'task1', id:1},
    {title: 'task2', id:2},
    {title: 'task3', id:3},
    
    
]

export default function myreducer(state=initialState, action) {
    switch (action.type) {
          case 'ADD' :
              console.log(action.payload)
              let newtodo = action.payload

              return [...state, newtodo]
         
          case 'DEL' :
              let id = action.payload
              let newState = state.filter(item=>item.id!==id)
              return newState

              default:
                  return state
    }
}
