import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
class Register extends Component {
    constructor() {
        super();
        this.state = {
            regform: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password2: "",
                referalerr:"",
                firstNameerr:"",
                lastNameerr: "",
                emailerr: "",
                passworderr: "",
                password2err: "",
                referalerr:"",
                referal: "",
            },
            errors: {}
        };
        
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/profile");
           
        }

    }
    componentWillReceiveProps(nextProps) {
        var statusCode,message;
        JSON.parse(window.localStorage.getItem('respdata'), (key, value) => {
            if (key === 'statusCode') {
            statusCode=value
            }
           else if (key === 'message') {
                message=value
                }

            //return value;
          });
        
        if (statusCode==400) {
            toast.success(message, { autoClose: 2000 })
            
        }
        else if (statusCode==200) {
            toast.success("Registration Completed Successfully", { autoClose: 2000 })
            this.props.history.push("/login");
        }
        // if (nextProps.errors) {
        //     this.setState({
        //         errors: nextProps.errors
        //     });
        // }
    }
    onChange = e => {
        
        const { regform } = this.state;
        this.setState({
            regform: {
                ...regform, // leave other values unchanged
                [e.target.id]: e.target.value, // update the changed value
            }
        });
        if (e.target.id == "referal" && e.target.value == '') {
            this.setState({ referalerr: "Sponsor ID field is required" });
        }
        else if (e.target.id == "referal" && e.target.value != '') {
            this.setState({ referal:e.target.value,referalerr: "" });
        }
        if (e.target.id == "firstName" && e.target.value == '') {
            this.setState({ firstNameerr: "First Name is Required" });
        }
        else if (e.target.id == "firstName" && e.target.value != '') {
            this.setState({  firstName:e.target.value,firstNameerr: "" });
        }
        if (e.target.id == "lastName" && e.target.value == '') {
            this.setState({ lastNameerr: "Last Name is Required" });
        }
        else if (e.target.id == "lastName" && e.target.value != '') {
            this.setState({ lastName:e.target.value,lastNameerr: "" });
        }
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
        const { regform, errors } = this.state;
        const { referal,firstName,lastName,email,password,password2 } = regform;
        if (referal == '') {
            this.setState({referalerr: "SponsorID Field is Required" });
        }
        else {
            this.setState({  referal:this.state.referal,referalerr: "" });
        }
        if (firstName== '') {
            this.setState({ firstNameerr: "First Name is Required" });
        }
        else{
            this.setState({  firstName:this.state.firstName,firstNameerr: "" });
        }
        if (lastName== '') {
            this.setState({ lastNameerr: "Last Name is Required" });
        }
        else {
            this.setState({   lastName:this.state.lastName,lastNameerr: "" });
        }
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
        if(this.state.referalerr=='' && this.state.firstNameerr=='' && this.state.lastNameerr==''  && this.state.emailerr==''&&this.state.passworderr=='') 
        
        {
            const newUser = {
                referal: this.state.referal,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                };
            this.props.registerUser(newUser, this.props.history);
        }
        
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div className="row  mt-5">
                    <div className="col-md-4 mx-auto mt-5 card shadow-lg">
                        <h2 className="text-center text-primary mt-3">Signup</h2>
                        <form noValidate onSubmit={this.onSubmit} className="white" id="regform">
                            <label htmlFor="email">SponsorID</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.referal}
                                id="referal"
                                type="text"
                                error={errors.referal}
                                className={classnames("form-control", {
                                    invalid: errors.referal
                                })}
                            />
                            <span className="text-danger">{this.state.referalerr}</span>
                            <br />
                            <label htmlFor="name">First Name</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.name}
                                id="firstName"
                                type="text"
                                error={errors.firstName}
                                className={classnames("form-control", {
                                    invalid: errors.firstName
                                })}
                            />
                            <span className="text-danger">{this.state.firstNameerr}</span>
                            <br />
                            <label htmlFor="name">Last Name</label>
                            <input
                                onChange={this.onChange}
                                value={this.state.lastName}
                                id="lastName"
                                type="text"
                                error={errors.lastName}
                                className={classnames("form-control", {
                                    invalid: errors.lastName
                                })}
                            />
                            <span className="text-danger">{this.state.lastNameerr}</span>
                            <br />
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
                            <br />
                            {/* 
                             */}
                            {/* <label htmlFor="usertype">User Type</label><br/>
                            <input type="radio" value="admin" id="usertype" name="usertype"  onChange={this.onChangeValue} /> Administrator
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="supervisor" name="usertype"  id="usertype" onChange={this.onChangeValue} /> Supervisor
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="user" name="usertype" id="usertype"  onChange={this.onChangeValue} /> User
                                <span className="text-danger">{errors.usertype}</span> */}
                            <p className="text-center pb-0 mt-2">
                                <button
                                    type="submit"
                                    className="btn btn-large btn-primary mt-2 px-5">
                                    Register
                                    </button>
                            </p>
                            <div className="card-body p-1">

                                <p className="grey-text text-darken-1">
                                    Already have an account? <Link to="/login">Log in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
toast.configure();
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));