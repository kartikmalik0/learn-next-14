export interface Todo {
    id: number;
    task: string;
   
    completed: boolean;
  }
  
    const todos =  [
        {
            id: 1,
            task: "Finish homework",
            completed: false
          },
          {
            id: 2,
            task: "Buy groceries",
            completed: false
          },
          {
            id: 3,
            task: "Call Mom",
            completed: true
          }
          
    ]
  
  
  export const fetchTodos = async (query = ""):Promise<Todo[]> =>{
    await new Promise((resolve)=> setTimeout(resolve,1000))
    console.log("fetched todos")

    const filterdTodos = todos.filter((todo)=>todo.task.toLowerCase().includes(query.toLowerCase()))
    return [...filterdTodos]
  }

  export const addTodo = async(todo:Todo):Promise<Todo>=>{
    await new Promise((resolve)=> setTimeout(resolve,1000))

    const newTodo = {
        id:todos.length +1,
        task:todo.task,
        completed:false
    }
    todos.push(newTodo) 
    return newTodo
  }