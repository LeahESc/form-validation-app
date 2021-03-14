import React, { Component } from 'react'

class Form extends Component {

    state = {
        name: '',
        errorMessage: ''
    }

    handleChange = (e) => { 
        let n = e.target.name 
        let val = e.target.value 
        let err = ''
        if (!val || val === ' '){
            err = 'This field is required'
        }
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            errorMessage: err
        })    
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name} />
                        {this.state.errorMessage}
                    <input 
                        type="submit" 
                    />  
                </form>
            </div>
        )
    }
}

export default Form; 