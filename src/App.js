
import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

// class App extends React.Component {
//   // Dummy data
//   state = {
//     todos: []
//   }

//   componentDidMount() {

//     // Promises
//     axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(res => this.setState({ todos: res.data }))
//   }

//   // delete todo
//   deleteTodo = (id) => {

//     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({
//       todos: [
//         ...this.state.todos.filter(todo => todo.id !== id)]
//     }))
//   }


//   addTodo = (title) => {
//     // let newTodo = {
//     //   id: uuidv4(),
//     //   title,
//     //   completed: false
//     // }
//     // this.setState({ todos: [...this.state.todos, newTodo] })

//     // Add todo
//     axios.post("https://jsonplaceholder.typicode.com/todos", {
//       title,
//       completed: false
//     }).then(res => this.setState({ todos: [...this.state.todos, res.data] }))
//   }

//   markComplete = (id) => {
//     this.setState({
//       todos: this.state.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed
//         }
//         return todo;
//       })
//     })
//   }



//   render() {
//     const { todos } = this.state;

//     return (
//       <div className="App">
//         <div className="container">
//           <Header />
//           <AddTodo addTodo={this.addTodo} />
//           <TodoList todos={todos} deleteTodo={this.deleteTodo} markComplete={this.markComplete} />
//         </div>
//       </div>
//     )
//   }
// }

const App = () => {

  const userData = {
    name: "sheik",
    age: 20,
  }

  const [todos, setTodos] = useState([])

  const [user, setUser] = useState(userData)

  console.log("user", user)



  useEffect(() => {
    // Promises
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(res => setTodos(res.data))
  }, [])



  const addTodo = (title) => {
    // Add todo
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    }).then(res => setTodos([...todos, res.data]))
  }

  const deleteTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(() =>
      setTodos([
        ...todos.filter(todo => todo.id !== id)])
    )
  }

  const markComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }))

  }

  // const changeName = () => {
  //   setUser({ ...user, name: "Arjun" })
  //   console.log("userdatas", user)
  // }

  return (
    <div className="App">
      <div className="container">
        {/* <button onClick={changeName}>ChangeName</button> */}
        <Header />
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} markComplete={markComplete} />
      </div>
    </div>
  )
}

export default App;
