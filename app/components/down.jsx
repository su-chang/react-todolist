import React from 'react'

class Down extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rest = this.props.rest;
        return (
            <div style={{fontFamily: 'Segoe UI'}}>
                <h3 style={{marginLeft: '20px', color: 'gray'}}>Down List</h3>
                <ul style={{marginLeft: '40px', marginTop: '15px', fontSize: '20px', color: 'red', lineHeight: '30px'}}>
                    {
                        rest.map((item, index) => {
                            return <li key={ index }  onClick={this.clickHandler.bind(this, item.id)}>{ item.text }</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    clickHandler(id) {
        this.props._deleteFn(id);
    }
}

export default Down