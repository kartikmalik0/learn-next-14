import { useQuery } from '@tanstack/react-query'
import { Todo, fetchTodos } from './api'
const Demo = () => {
    const {data:todos , isLoading, error} = useQuery({
        queryFn: ()=>fetchTodos(),
        queryKey:["todos"]
    })
    if(isLoading){
        return(
            <p>Loading...</p>
        )
    }
  return (
    <div>
      React Query 
      {
        todos?.map((todo:Todo)=>(
            <ul>
                <li>{todo.id}</li>
                <li>{todo.task}</li>
                <li>{todo.completed.toString()}</li>
            </ul>
        ))
      }
    </div>
  )
}

export default Demo
