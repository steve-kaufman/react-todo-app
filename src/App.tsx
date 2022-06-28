import { useState } from "react"

type Todo = {
  title: string
  isCompleted: boolean
}

function App() {
  const [newTodoName, setNewTodoName] = useState("")
  const [todos, setTodos] = useState<Todo[]>([
    {
      title: "do the dishes",
      isCompleted: false,
    },
    {
      title: "mow the lawn",
      isCompleted: true,
    },
  ])

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        title: newTodoName,
        isCompleted: false,
      },
    ])
  }

  return (
    <div className="App">
      <ul className="todo-list">
        {todos.map((todo, i) => (
          <li className="todo-item">
            <p>{todo.title}</p>
            <input
              type={"checkbox"}
              checked={todo.isCompleted}
              onChange={(e) => {
                const newTodos = [...todos]
                newTodos[i].isCompleted = e.currentTarget.checked
                setTodos(newTodos)
              }}
            />
          </li>
        ))}
      </ul>
      <input
        value={newTodoName}
        onChange={(e) => setNewTodoName(e.currentTarget.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default App
