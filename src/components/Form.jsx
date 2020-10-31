import React from "react";

class Form extends React.Component{
    constructor() {
        super();
        this.state = {
            name: '',
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit =  async (e) => {
        e.preventDefault();
        let res = await fetch('http://localhost:4000/post', {
            mode: 'cors',
            method: 'POST',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(this.state)
        });
        console.log(res);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <legend>Name</legend>
                    <input value={this.state.name} onChange={this.handleChange} name='name' type='text'></input>
                </div>
                <div>
                    <legend>Username</legend>
                    <input value={this.state.username} onChange={this.handleChange} name='username' type='text'></input>
                </div>
                <div>
                    <legend>Password</legend>
                    <input value={this.state.password} onChange={this.handleChange} name='password' type='password'></input>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}


export default Form;