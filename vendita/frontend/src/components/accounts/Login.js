import React, { Component } from 'react'
import { Link } from "react-router-dom";

// CSS
import css from './styles.css'



class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    onSubmit = e => {
        e.preventDefault();
        console.log("submit")
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { username, password } = this.state;
        return (
            <div className="reg-form">
                <div className="card card-body">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p>
                            Don`t have an account? <Link to="/vendita/regiser">register</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;