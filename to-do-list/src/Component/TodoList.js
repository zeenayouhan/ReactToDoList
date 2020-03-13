import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">todo list</h3>
                    <TodoItem/>
                    <button type="button" className="btn btn-danger mt-3 btn-block text-capitalize">clear list</button>
                </ul>
            </div>
        )
    }
}
