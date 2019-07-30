import React, { Component } from 'react'
import PropTypes from "prop-types";
//Router
import { Link, Redirect } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import { login } from "../../actions/auth";
// CSS
import css from './Accounts.css'



class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        errorMsg: PropTypes.object,
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/vendita" />;
        }
        const { username, password } = this.state;
        return (
            <div className="form-page">
                <div className="form-body">
                    <h2>Login</h2>
                    <h4>{this.props.errorMsg.non_field_errors ?
                        this.props.errorMsg.non_field_errors : ""}</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label><br />
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label><br />
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
                            Don`t have an account? <Link to="/vendita/register">Register</Link>
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
export default connect(mapStateToProps, { login })(Login);