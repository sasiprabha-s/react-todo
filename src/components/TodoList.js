import React from "react";
import "./todoList.css"


// class TodoList extends React.Component {

//     getStyle = (completed) => {

//         return {
//             background: "#f4f4f4",
//             padding: "10px",
//             borderBottom: "1px #ccc dotted",
//             textDecoration: completed ? "line-through" : "none",
//         };
//     };

//     render() {

//         const { todos, deleteTodo, markComplete } = this.props;
//         return (
//             <>
//                 {todos.length > 0 ? todos.map(todo => (
//                     <div style={this.getStyle(todo.completed)}>
//                         <p>
//                             <input type="checkbox" onChange={() => markComplete(todo.id)} /> {"  "}
//                             {todo.title}
//                             <button className="btn-style" onClick={() => deleteTodo(todo.id)} >Delete</button>
//                         </p>
//                     </div>
//                 )) : <h4>Loading...</h4>}

//             </>
//         )
//     }
// }

const TodoList = ({ todos, deleteTodo, markComplete }) => {


    const getStyle = (completed) => {

        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none",
        };
    };


    return (
        <>
            {todos.length > 0 ? todos.map(todo => (
                <div style={getStyle(todo.completed)}>
                    <p>
                        <input type="checkbox" onChange={() => markComplete(todo.id)} /> {"  "}
                        {todo.title}
                        <button className="btn-style" onClick={() => deleteTodo(todo.id)} >Delete</button>
                    </p>
                </div>
            )) : <h4>Loading...</h4>}

        </>
    )
}
export default TodoList;