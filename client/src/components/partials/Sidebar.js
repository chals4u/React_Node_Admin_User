import React, { Component } from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import {Link} from "react-router-dom";

class Sidebar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        //const { user } = this.props.auth;
        return (
            <div>
               <div class=" col-lg-12 m-b30">
                                            <div class="sticky-top">
                                                <div class="candidate-info">
                                                    <div class="candidate-detail text-center">
                                                        <div class="canditate-des">
                                                            <a href="javascript:void(0);">
                                                                <img alt="" src="uploads/userprofile/5d1daa341f14e.jpg" />
                                                            </a>
                                                            <div class="upload-link" title="update" data-toggle="tooltip" data-placement="right">
                                                                <form id="pfpic" action="" method="post" enctype="multipart/form-data">
                                                                    <input name="pfpic" type="file" class="update-flie" id="inputfile" />
                                                                </form>

                                                                <i class="fa fa-camera"></i>

                                                            </div>
                                                        </div>
                                                        <div class="candidate-title">
                                                            <div class="">
                                                                <h4 class="m-b5"><a href="javascript:void(0);">John Mech</a></h4>
                                                                <p class="m-b0"><a href="javascript:void(0);"><b>Join Date : </b> June 06, 2019</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li><a href="dashboard.php" >
                                                            <i class="fa fa-tachometer" aria-hidden="true"></i>
                                                            <span>Dashboard</span></a></li>
                                                        <li><a href="my-profile.php"  >
                                                            <i class="fa fa-user-o" aria-hidden="true"></i>
                                                            <span>Profile</span></a></li>
                                                        <li><a href="edit-profile.php" >
                                                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                                                            <span>Edit Profile</span></a></li>
                                                        <li><a href="start-fundraiser.php" >
                                                            <i class="fa fa-money" aria-hidden="true"></i>
                                                            <span>Start A Fundraiser</span></a></li>
                                                        <li><a href="my-fundraiser.php" >
                                                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                                                            <span>My Fundraiser</span></a></li>
                                                        <li><a href="my-investment.php" >
                                                            <i class="fa fa-bell-o" aria-hidden="true"></i>
                                                            <span>My Investment</span></a></li>
                                                        <li><a href="genealogy.php" >
                                                            <i class="fa fa-sitemap" aria-hidden="true"></i>
                                                            <span>Genealogy
                                            </span></a></li>
                                                        <li><a href="inbox.php" >
                                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                                            <span>Inbox
                                            </span></a></li>
                                                        <li><a href="user_payout.php" >
                                                            <i class="fa fa-money" aria-hidden="true"></i>
                                                            <span>Bonus Payout</span></a></li>
                                                        <li><a href="user_wallet.php" >
                                                            <i class="fa fa-money" aria-hidden="true"></i>
                                                            <span>My Wallet</span></a></li>
                                                        <li><a href="withdraw_request.php" >
                                                            <i class="fa fa-money" aria-hidden="true"></i>
                                                            <span>Withdraw Request</span></a></li>
                                                        <li><a href="my-comments.php" >
                                                            <i class="fa fa-id-card-o" aria-hidden="true"></i>
                                                            <span>Comments</span></a></li>
                                                        <li><a href="change-password.php" >
                                                            <i class="fa fa-key" aria-hidden="true"></i>
                                                            <span>Change Password</span></a></li>
                                                        <li><a href="destroy.php" >
                                                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                                                            <span>Log Out</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Sidebar);
