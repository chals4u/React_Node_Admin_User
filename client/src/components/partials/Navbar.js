import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png';
class Navbar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        return (
            <div className="container-fluid p-0">
                 <header class="header-area heder-transprt">
                    <div class="menu-area">

                        <div class="container">

                            <div class="row">

                                <div class="col-md-3">



                                    <div class="believed-logo">

                                        <a href="index.php"><img src={logo} alt="" /></a>

                                    </div>
                                    <div class="responsive-menu-wrap"></div>

                                </div>

                                <div class="col-md-9">



                                    <nav class="main-menu">

                                        <ul class="navigation">

                                            <li><a href="index.php" class="menu-active">home</a></li>

                                            <li><a href="about.php">about us</a></li>

                                            <li><a href="list.php">Browse Fundraisers</a> </li>

                                            <li><a href="how-it-works.php">How It Works</a></li>



                                        </ul>

                                    </nav>



                                    <div class="donate-box">




                                        <a href="start-fundraiser.php" class="start-a-fundraiser mat-button"> Start a Fundraiser</a>




                                        <a class="sign-fd myact-drop" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">My Account<i class="fa fa-caret-down" aria-hidden="true"></i></a>



                                        <div class="collapse" id="collapseExample">

                                            <div class="well myact-down">

                                                <ul class="drop-menu">

                                                    <li><a href="my-profile.php"><i class="fa fa-user-o" aria-hidden="true"></i> My Profile</a></li>

                                                    <li><a href="start-fundraiser.php"><i class="fa fa-money" aria-hidden="true"></i> Start a Fundraiser</a></li>

                                                    <li><a href="my-investment.php"><i class="fa fa-bell-o" aria-hidden="true"></i> My Investment</a></li>

                                                    <li><a onClick={this.onLogoutClick}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>

                                                </ul>

                                            </div>


                                        </div>





                                    </div>





                                </div>

                            </div>

                        </div>

                    </div>

                </header>
            </div>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Navbar);
