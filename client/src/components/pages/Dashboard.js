import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";
import Footer from "../partials/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { Link } from "react-router-dom";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons/faUserAlt";
class Dashboard extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <Navbar />
                <section class="page-title-area parallax">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                
                    <div class="page-title">
                                    {/* <div class="title">
                                        <h2>Dashboard</h2>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class=" section-padding bg-log">
                    <div class="page-content bg-white">
                        
        <div class="content-block">
                            
			<div class="section-full  browse-job p-t50 p-b20">
                                <div class="container">
                                    <div class="row">

                                        <div class=" col-lg-3 m-b30">
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
                                                </div>						<div class=" col-lg-9 m-b30">
                                                    <div class="job-bx job-profile">
                                                        <div class="">

                                                            <div class="job-bx-title clearfix">

                                                                <h5 class="font-weight-700 pull-left text-uppercase">Referral Link </h5>



                                                            </div>



                                                            <div class="input-group" style={{marginBottom:"20px"}}>

                                                                <input id="myInput" type="text" class="form-control" value="http://74.124.215.220/~demolin/demo/crowdfunding-mlm//register.php?sponid=CFMLM901692" aria-describedby="basic-addon2" readonly />

                                                                    <span onclick="" class="input-group-addon" id="basic-addon2" style={{backgroundColor: '#36b6dc',Color: "#fff"}}><a href="#" style={{Color:"white"}} >Copy Link</a></span>

								  

								</div>





                                                            </div>								<div class="job-bx-title clearfix">
                                                                <h5 class="font-weight-700 pull-left text-uppercase">Basic Information</h5>

                                                            </div>
                                                            <form>
                                                                <div class="row m-b30">
                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="form-group">
                                                                            <label class="col-sm-5">First Name</label>
                                                                            <label class="col-sm-1">:</label>
                                                                            <p class="col-sm-5 padt-6" placeholder=" MATIN">John</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="form-group">
                                                                            <label class="col-sm-5">Last Name</label>
                                                                            <label class="col-sm-1">:</label>
                                                                            <p class="col-sm-5 padt-6" placeholder=" MATIN">Mech</p>											</div>
                                                                    </div>
                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="form-group">

                                                                            <label class="col-sm-5">Email</label>
                                                                            <label class="col-sm-1">:</label>
                                                                            <p class="col-sm-5 padt-6" placeholder=" MATIN">john@gmail.com</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="form-group">
                                                                            <label class="col-sm-5">Profile ID</label>
                                                                            <label class="col-sm-1">:</label>
                                                                            <p class="col-sm-5 padt-6" placeholder=" MATIN">CFMLM901692</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="form-group">
                                                                            <label class="col-sm-5">Sponsor ID</label>
                                                                            <label class="col-sm-1">:</label>
                                                                            <p class="col-sm-5 padt-6" placeholder=" MATIN">CFMLM763807</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="form-group">
                                                                            <label class="col-sm-5">Phone Number</label>
                                                                            <label class="col-sm-1">:</label>
                                                                            <p class="col-sm-5 padt-6" placeholder=" MATIN">9087166363</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6 col-md-6">
                                                                        <div class="form-group">

                                                                            <label class="col-sm-5">Profile Picture</label>
                                                                            <label class="col-sm-1">:</label>
                                                                            <div class="col-sm-5 padt-6" placeholder=" MATIN"><img alt="" src="uploads/userprofile/5d1daa341f14e.jpg" class="img-responsive edit-imgpr" /></div>
                                                                            </div>
                                                                        </div>


                                                                        <div class="col-lg-12 col-md-12">
                                                                            <div class="form-group">
                                                                                <label>Description:</label>
                                                                                <p class="padt-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectet</p>
											</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="job-bx-title clearfix">
                                                                            <h5 class="font-weight-700 pull-left text-uppercase">Contact Information</h5>
                                                                        </div>
                                                                        <div class="row">


                                                                            <div class="col-lg-6 col-md-6">
                                                                                <div class="form-group">
                                                                                    <label>Country:</label>
                                                                                    <p class="padt-5" placeholder=" MATIN">India</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6 col-md-6">
                                                                                <div class="form-group">
                                                                                    <label>State:</label>
                                                                                    <p class="padt-5" placeholder=" MATIN">Tamil Nadu</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6 col-md-6">
                                                                                <div class="form-group">
                                                                                    <label>City:</label>
                                                                                    <p class="padt-5" placeholder=" MATIN">Alandurai</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6 col-md-6">
                                                                                <div class="form-group">
                                                                                    <label>Postcode:</label>
                                                                                    <p class="padt-5" placeholder=" MATIN">600054</p>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-lg-12 col-md-12">
                                                                                <div class="form-group">
                                                                                    <label>Full Address:</label>
                                                                                    <p class="padt-5" placeholder=" MATIN"><p>Street&nbsp;addresses: 445 Mount Eden Road, Mount Eden, Auckland.</p></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <a href="edit-profile.php" class="site-button-secondry m-b30">Edit Profile</a>
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

Dashboard.propTypes = {
                                    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
                                    auth: state.auth
});

export default connect(
    mapStateToProps,
    {logoutUser}
)(Dashboard);
