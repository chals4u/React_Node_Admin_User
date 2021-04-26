import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { userInfo } from "../../actions/userActions";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";
import Footer from "../partials/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { Link } from "react-router-dom";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons/faUserAlt";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import axios from "axios";
class Profile extends Component {
    constructor() {
        super();
        this.state = {
            profileform: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password2: "",
                referalerr: "",
                firstNameerr: "",
                lastNameerr: "",
                emailerr: "",
                passworderr: "",
                password2err: "",
                referalerr: "",
                referal: "",
            },
            errors: {},
            records: {}
        };
        // this.onChangeValue = this.onChangeValue.bind(this);
    };
    componentDidMount() {
        this.getUser();
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/profile");
            window.localStorage.removeItem("regsuccess")
        }

    };
    componentWillReceiveProps(nextProps) {
        // let code = JSON.parse(window.localStorage.getItem('code'));
        // if (code==400) {
        //     toast.success("User Already Exist", { autoClose: 2000 })
        //     this.props.history.push("/register");
        //     window.localStorage.removeItem("regsuccess")
        // }
        // else if (code==200) {
        //     toast.success("Registration Completed Successfully", { autoClose: 2000 })
        //     window.localStorage.removeItem("regsuccess")
        //     this.props.history.push("/login");
        // }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    };
    getUser = () => {
        this.props.userInfo();
        let userinfo = JSON.parse(window.localStorage.getItem('userinfo'));
        this.setState({
            id: userinfo._id,
            firstName: userinfo.firstName,
            lastName: userinfo.lastName,
            email: userinfo.email,
            referalCode: userinfo.referalCode,
            referalLink: userinfo.referalLink,
        })
    }
    onChange = e => {

        const { profileform } = this.state;
        this.setState({
            profileform: {
                ...profileform, // leave other values unchanged
                [e.target.id]: e.target.value, // update the changed value
            }
        });
        if (e.target.id == "referal" && e.target.value == '') {
            this.setState({ referalerr: "Sponsor ID field is required" });
        }
        else if (e.target.id == "referal" && e.target.value != '') {
            this.setState({ referal: e.target.value, referalerr: "" });
        }
        if (e.target.id == "firstName" && e.target.value == '') {
            this.setState({ firstNameerr: "First Name is Required" });
        }
        else if (e.target.id == "firstName" && e.target.value != '') {
            this.setState({ firstName: e.target.value, firstNameerr: "" });
        }
        if (e.target.id == "lastName" && e.target.value == '') {
            this.setState({ lastNameerr: "Last Name is Required" });
        }
        else if (e.target.id == "lastName" && e.target.value != '') {
            this.setState({ lastName: e.target.value, lastNameerr: "" });
        }
        if (e.target.id == "email" && e.target.value == '') {
            this.setState({ emailerr: "Email is Required" });
        }
        else if (e.target.id == "email" && e.target.value != '') {
            this.setState({ email: e.target.value, emailerr: "" });
        }
        if (e.target.id == "password" && e.target.value == '') {
            this.setState({ passworderr: "Password is Required." });

        }
        if (e.target.id == "password" && e.target.value != '') {
            this.setState({ password: e.target.value, passworderr: "" });
            var pwd = e.target.value;
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
        const { profileform, errors } = this.state;
        const { referal, firstName, lastName, email, password, password2 } = profileform;
        if (referal == '') {
            this.setState({ referalerr: "SponsorID Field is Required" });
        }
        else {
            this.setState({ referal: this.state.referal, referalerr: "" });
        }
        if (firstName == '') {
            this.setState({ firstNameerr: "First Name is Required" });
        }
        else {
            this.setState({ firstName: this.state.firstName, firstNameerr: "" });
        }
        if (lastName == '') {
            this.setState({ lastNameerr: "Last Name is Required" });
        }
        else {
            this.setState({ lastName: this.state.lastName, lastNameerr: "" });
        }
        if (email == '') {
            this.setState({ emailerr: "Email is Required" });
        }
        else if (!validator.isEmail(email)) {
            this.setState({ emailerr: "Invalid Email" });
        }
        else {
            this.setState({ email: this.state.email, emailerr: "" });
        }
        if (password == '') {
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
            this.setState({ password: this.state.password, passworderr: "" });
        }
        if (this.state.referalerr == '' && this.state.firstNameerr == '' && this.state.lastNameerr == '' && this.state.emailerr == '' && this.state.passworderr == '') {
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


    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <Navbar />
                <section className="page-title-area parallax">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="page-title">
                                    {/* <div className="title">
                                        <h2>Profile</h2>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" section-padding bg-log">
                    <div className="page-content bg-white">

                        <div className="content-block">

                            <div className="section-full  browse-job p-t50 p-b20">
                                <div className="container">
                                    <div className="row">
                                        <Sidebar />
                                        <div className=" col-lg-9 m-b30">
                                            <div className="job-bx job-profile">
                                                <div className="">

                                                    <div className="job-bx-title clearfix">

                                                        <h5 className="font-weight-700 pull-left text-uppercase">Referral Link </h5>
                                                    </div>
                                                    <div className="input-group" style={{ marginBottom: "20px" }}>

                                                        <input id="myInput" type="text" className="form-control" value={this.state.referalLink} aria-describedby="basic-addon2" readonly />

                                                        <span onclick="" className="input-group-addon" id="basic-addon2" style={{ backgroundColor: '#36b6dc', Color: "#fff" }}><a href="#" style={{ Color: "white" }} >Copy Link</a></span>



                                                    </div>





                                                </div>								<div className="job-bx-title clearfix">
                                                    <h5 className="font-weight-700 pull-left text-uppercase">Basic Information</h5>

                                                </div>
                                                <form>
                                                    <div className="row m-b30">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="col-sm-5">First Name:</label>
                                                                <p className="col-sm-12">
                                                                    <input
                                                                        onChange={this.onChange}
                                                                        value={this.state.firstName}
                                                                        id="firstName"
                                                                        type="text"

                                                                        className="form-control"
                                                                    /></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="col-sm-5">Last Name</label>

                                                                <p className="col-sm-12">
                                                                    <input
                                                                        onChange={this.onChange}
                                                                        value={this.state.lastName}
                                                                        id="lastName"
                                                                        type="text"

                                                                        className="form-control"
                                                                    /></p>											</div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">

                                                                <label className="col-sm-5">Email</label>
                                                                <p className="col-sm-12">
                                                                    <input
                                                                        onChange={this.onChange}
                                                                        value={this.state.email}
                                                                        id="email"
                                                                        type="text"

                                                                        className="form-control"
                                                                    /></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="col-sm-5">Profile ID</label>
                                                                <label className="col-sm-1">:</label>
                                                                <p className="col-sm-12">
                                                                    <input
                                                                        onChange={this.onChange}
                                                                        value={this.state.referalCode}
                                                                        id="referalCode"
                                                                        type="text"

                                                                        className="form-control"
                                                                    /></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="col-sm-5">Sponsor ID</label>
                                                                <p className="col-sm-12">
                                                                    <input
                                                                        onChange={this.onChange}
                                                                        value={this.state.referalCode}
                                                                        id="referalCode"
                                                                        type="text"

                                                                        className="form-control"
                                                                    /></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="col-sm-5">Phone Number</label>
                                                                <p className="col-sm-12">
                                                                    <input
                                                                        onChange={this.onChange}
                                                                        value={this.state.phone}
                                                                        id="phone"
                                                                        type="text"

                                                                        className="form-control"
                                                                    /></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">

                                                                <label className="col-sm-5">Profile Picture</label>
                                                                <label className="col-sm-1">:</label>
                                                                <div className="col-sm-5 padt-6" placeholder=" MATIN"><img alt="" src="uploads/userprofile/5d1daa341f14e.jpg" className="img-responsive edit-imgpr" /></div>
                                                            </div>
                                                        </div>


                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="form-group">
                                                                <label>Description:</label>
                                                                <p className="padt-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectet</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="job-bx-title clearfix">
                                                        <h5 className="font-weight-700 pull-left text-uppercase">Contact Information</h5>
                                                    </div>
                                                    <div className="row">


                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label>Country:</label>
                                                                <p className="col-sm-12">
                                                                    <input
                                                                        onChange={this.onChange}
                                                                        value={this.state.country}
                                                                        id="country"
                                                                        type="text"

                                                                        className="form-control"
                                                                    /></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label>State:</label>
                                                                <p className="col-sm-12">
                                                                    <input
                                                                        onChange={this.onChange}
                                                                        value={this.state.state}
                                                                        id="state"
                                                                        type="text"

                                                                        className="form-control"
                                                                    /></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label>City:</label>
                                                                <p className="col-sm-12">
                                                                    <input
                                                                        onChange={this.onChange}
                                                                        value={this.state.city}
                                                                        id="city"
                                                                        type="text"

                                                                        className="form-control"
                                                                    /></p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label>Postcode:</label>
                                                                <p className="col-sm-12">
                                                                    <input
                                                                        onChange={this.onChange}
                                                                        value={this.state.zip}
                                                                        id="zip"
                                                                        type="text"

                                                                        className="form-control"
                                                                    /></p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="form-group">
                                                                <label>Full Address:</label>
                                                                <p className="col-sm-12">
                                                                    <input
                                                                        onChange={this.onChange}
                                                                        value={this.state.address}
                                                                        id="address"
                                                                        type="text"

                                                                        className="form-control"
                                                                    /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="edit-profile.php" className="site-button-secondry m-b30">Edit Profile</a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <Footer />



            </div>
        );
    }
}

Profile.propTypes = {
    userInfo: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser, userInfo }
)(Profile);
