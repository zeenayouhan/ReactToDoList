import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">todo list</h3>
                    <button type="button" className="btn btn-danger">Clear list</button>
                </ul>
            </div>
        )
    }
}
