import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const todos = this.props.todos;
        return (
            <div style={{fontFamily: 'Segoe UI'}}>
                <h3 style={{marginLeft: '20px', color: 'gray'}}>Todo List</h3>
                <ul style={{marginLeft: '40px', marginTop: '15px', fontSize: '20px', color: 'lightgreen', lineHeight: '30px'}}>
                    {
                        todos.map((item, index) => {
                            return <li key={ index } onClick={this.clickHandler.bind(this, item.id)}>{ item.text }</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    clickHandler(id) {
        this.props.deleteFn(id);
    }
}

export default List