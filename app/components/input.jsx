import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <input
                    style={{margin: '10px auto', border: 'solid 1px lightgray', width: '98%', height: '40px', fontSize: '35px'}}
                    value={this.state.value}
                    onChange={this.changeHandler.bind(this)}
                    onKeyUp={this.keyUpHandler.bind(this)}/>
            </div>
        )
    }

    changeHandler(e) {
        this.setState({
            value: e.target.value
        })
    }

    keyUpHandler(e) {
        const value = this.state.value;

        if(e.keyCode == 13 && value.trim()) {
            this.props.submitFn(value);
            this.setState({
                value: ''
            });
        }
    }
}

export default Input