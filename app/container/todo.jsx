import React from 'react'

import Input from '../components/input'
import Header from '../components/header'
import List from '../components/list'
import Down from '../components/down'

class TODO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            rest: []
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Input submitFn={this.submitFn.bind(this)}/>
                <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)}/>
                <Down rest={this.state.rest}  _deleteFn={this._deleteFn.bind(this)}/>
            </div>
        )
    }

    submitFn(value) {
        const todo_id = this.state.todos.length;

        this.setState({
            todos: this.state.todos.concat({
                id: todo_id,
                text: value
            })
        })
    }

    deleteFn(id) {
        let data = this.state.todos;
        let todos = data.filter((item) => {
            if(item.id !== id) {
                return item;
            }
        });

        let rest = data.filter((item) => {
            if(item.id == id) {
                return item;
            }
        })

        const rest_id = this.state.rest.length;

        this.setState({
            todos: todos,
            rest: this.state.rest.concat({
                id: rest_id,
                text: rest[0].text
            })
        })
    }

    _deleteFn(id) {
        let data = this.state.rest;
        let rest = data.filter((item) => {
            if(item.id !== id) {
                return item;
            }
        });

        this.setState({
            rest: rest
        })
    }
}

export default TODO