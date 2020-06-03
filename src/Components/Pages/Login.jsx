import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            status: false,
            isAuth: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        let uname = "admin"
        let pword = "admin"
        const { username, password } = this.state
        if(username === uname && password === pword){
            this.setState({
                status: true
            })
            this.props.handleLogin()
        }
        else{
            alert("Wrong Username or Password, Please try again!")
        }
    }

    componentDidMount(){
        if(this.props.isAuth === true){
            this.props.handleLogout()
        }
    }

    render(){
        const { username, password } = this.state
        const status = this.state.status
        const isAuth = this.props.isAuth

        if(!status && isAuth === this.state.isAuth){
            return(
                <div className="row mt-5">
                    <div className="col">
                        <div className="mb-5 display-4 text-center text-primary font-weight-bold">Footwear Factory</div>
                        <div className="card mx-auto my-5 border-0 shadow-lg" style={{width: 30+"rem"}}>
                            <h1 className="text-center mt-5">WELCOME</h1>
                            <div className="card-body h5 mt-2">
                                <label>Username:</label>
                                <input className="form-control form-control-lg border-dark text-dark" name="username" value={username} type="text" onChange={this.handleChange} />
                                <br/>
                                <label>Password:</label>
                                <input className="form-control form-control-lg border-dark text-dark" name="password" value={password} type="password" onChange={this.handleChange} />
                                <br/>
                                <div className="my-4">
                                    <button className="btn btn-primary btn-lg btn-block font-weight-bold" onClick={this.handleLogin}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <Redirect to="/" />
            )
        }

    }
}