import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Link, withRouter } from "react-router-dom";
import $ from 'jquery';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classnames from "classnames";
import validator from 'validator';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginfrm:{
                email: "",
                password: "",
                emailerr: "",
                passworderr: "",
            },
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
        this.props.history.push("/profile");
        }
    };

    componentWillReceiveProps(nextProps) {
      
      if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/profile");
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        
    }

    onChange = e => {
        const { loginfrm } = this.state;
        this.setState({
            loginfrm: {
                ...loginfrm, // leave other values unchanged
                [e.target.id]: e.target.value, // update the changed value
            }
        });
        if (e.target.id == "email" && e.target.value == '') {
            this.setState({ emailerr: "Email is Required" });
        }
        else if (e.target.id == "email" && e.target.value != '') {
            this.setState({ email:e.target.value,emailerr: "" });
        }
        if (e.target.id == "password" && e.target.value == '') {
            this.setState({ passworderr: "Password is Required." });
         
        }
        if (e.target.id == "password" && e.target.value != '') {
            this.setState({ password:e.target.value,passworderr: "" });
            var pwd=e.target.value;
            if (pwd.length < 8) {
                this.setState({ passworderr: "Password length should be atleast 8 characters." });
            }
            if (pwd.length > 20) {
                this.setState({ passworderr: "Password length should not exceed 20 characters." });
            }
        }
    };

    onSubmit = e => {
        e.preventDefault();
        const { loginfrm, errors } = this.state;
        const { email,password } = loginfrm;
        if (email== '') {
            this.setState({ emailerr: "Email is Required" });
        }
        else if (!validator.isEmail(email)) {
            this.setState({ emailerr: "Invalid Email" });
        }
        else{
            this.setState({   email:this.state.email,emailerr: "" });
        }
        if (password== '') {
            this.setState({ passworderr: "Password is Required." });
        }
        else if (password.length < 8) {
            this.setState({ passworderr: "Password length should be atleast 8 characters." });
        }
        else if (password.length > 20) {
            this.setState({ passworderr: "Password length should not exceed 20 characters." });
        }
        // else if (password!=password2){
        //     this.setState({ passworderr: "Password and Confirm password should be same." });
        // }
        else {
            this.setState({  password:this.state.password,passworderr: "" });
        }
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 mx-auto mt-5 card shadow-lg">
                        <div className="card-body p-1">
                            <h2 className="text-center text-primary mt-3">Login</h2>
                            <form noValidate onSubmit={this.onSubmit} className="white" id="loginfrm">
                                <label htmlFor="email">Email</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("form-control", {
                                        invalid: errors.email
                                    })}
                                />
                                <span className="text-danger">{this.state.emailerr}</span>
                                <br />
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("form-control", {
                                        invalid: errors.password
                                    })}
                                />
                                <span className="text-danger">{this.state.passworderr}</span>
                                <p className="text-center pb-0 mt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-large btn-primary mt-2 px-5">
                                        Login
                                    </button>
                                    <div className="card-body p-1">

                                        <p className="grey-text text-darken-1">
                                           If you don't have an account? Click here to  <Link to="/register">Register</Link>
                                        </p>
                                    </div>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// toast.configure();
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
