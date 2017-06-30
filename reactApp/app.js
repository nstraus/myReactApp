import React from 'react'
import ReactDOM from 'react-dom'

const todoTest = [
    {desc: 'Do homework'},
    {desc: 'Clean room'},
    {desc: 'Go to sleep'},
]

function Todo(task) {
    return (
        <li><button>X</button> {task.desc}</li>
    )
}

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul>
                {todoTest.map(Todo)}
            </ul>
        )
    }
}

ReactDOM.render(<TodoList/>,
    document.getElementById('root'));