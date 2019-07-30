import React, { Component } from 'react';
import PropTypes from "prop-types";
//Router
import { Link, Redirect } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import { register } from "../../actions/auth";
//CSS Styles
import css from './styles.css';


class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        passwordError: '',
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        errorMsg: PropTypes.object,
    };

    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;

        if (password !== password2) {
            this.setState({ passwordError: "Password do not match " });
        } else {
            const newUser = {
                username,
                password,
                email
            };
            this.props.register(newUser);
        }
    };


    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {

        if (this.props.isAuthenticated) {
            return <Redirect to="/vendita" />;
        }

        const { username, email, password, password2 } = this.state;

        return (
            <div className="form-page">
                <div className="form-body">
                    <h2>Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username-register">Username</label><br />
                            <h4>{this.props.errorMsg.username ?
                                this.props.errorMsg.username : ""}</h4>
                            <input
                                id="username-register"
                                type="text"
                                className="form-input"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email-register">Email</label><br />
                            <h4>{this.props.errorMsg.email ?
                                this.props.errorMsg.username : ""}</h4>
                            <input
                                id="email-register"
                                type="email"
                                className="form-input"
                                name="email"
                                onChange={this.onChange}
                                value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-register">Password</label><br />
                            <h4>{this.props.errorMsg.password ?
                                this.props.errorMsg.password : ""}</h4>
                            <h4>{this.state.passwordError ?
                                this.state.passwordError : ""}</h4>
                            <input
                                id="password-register"
                                type="password"
                                className="form-input"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2-register">Confirm Password</label><br />
                            <input
                                id="password2-register"
                                type="password"
                                className="form-input"
                                name="password2"
                                onChange={this.onChange}
                                value={password2}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="register-submit">
                                Register
                            </button>
                        </div>
                        <p>
                            Already have an account? <Link to="/vendita/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    errorMsg: state.authReducer.errorMsg,
});
export default connect(mapStateToProps, { register })(Register);