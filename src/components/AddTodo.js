import React, { useState } from "react";
import "./addtodo.css"


// class AddTodo extends React.Component {

//     state = {
//         title: ""
//     }

//     titleChange = (e) => {
//         this.setState({ title: e.target.value })
//     }


//     onSubmit = (e) => {
//         e.preventDefault();
//         this.props.addTodo(this.state.title)
//         this.setState({ title: "" })
//     }



//     render() {
//         const { title } = this.state
//         return (
//             <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>

//                 <input type="text" name="title" value={title} onChange={(e) => this.titleChange(e)} className="input-style" />
//                 <input
//                     type="submit"
//                     value="Submit"
//                     className="btn"
//                     style={{ flex: '1' }}
//                 />
//             </form>
//         )
//     }
// }

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("")


    const titleChange = (e) => {
        setTitle(e.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(title)
        setTitle("")
    }



    return (
        <form onSubmit={onSubmit} style={{ display: 'flex' }}>

            <input type="text" name="title" value={title} onChange={(e) => titleChange(e)} className="input-style" />
            <input
                type="submit"
                value="Submit"
                className="btn"
                style={{ flex: '1' }}
            />
        </form>
    )
}

export default AddTodo;