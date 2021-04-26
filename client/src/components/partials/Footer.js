import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
class Footer extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        // console.log('jjj');
        // console.log(user);
        return (
            <div>
                
                    <div class="top-footer-area section-padding33">
                        <div style={{backgroundColor:"#1A1A1A"}}>
                            <div class="row" style={{paddingLeft:'20px'}}>

                                <div class="col-md-3 col-sm-6">
                                    <div class="footer-widgets">
                                        <h2>About Us</h2>
                                        <p>Lorem ipsum dolor sit amet, sed do eiusmod temporia.Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor adipiscing elit. Aenean commodo ligula eget dolor eiusmod temporia. Aenean adipiscing massa.</p>
                                        <ul>
                                            <li><i class="fa fa-phone" aria-hidden="true"></i> <a href="#">+0000000000</a></li>
                                            <li><i class="fa fa-envelope" aria-hidden="true"></i> <a href="#">admin@gmail.com</a></li>
                                            <li><i class="fa fa-map-marker" aria-hidden="true"></i>Contact Address</li>
                                        </ul>


                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-6">
                                    <div class="footer-widgets">
                                        <h2>quick links</h2>
                                        <ul>
                                            <li><a href="index.php"><i class="fa fa-angle-right"></i>Home</a></li>
                                            <li><a href="about.php"><i class="fa fa-angle-right"></i>About Us</a></li>
                                            <li><a href="list.php"><i class="fa fa-angle-right"></i>Our Recent Project</a></li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i>Recent Events</a></li>
                                            <li><a href="how-it-works.php"><i class="fa fa-angle-right"></i>How It Works</a></li>
                                            <li><a href="list.php"><i class="fa fa-angle-right"></i>Browse Projects</a></li>
                                            <li><a href="contact-us.php"><i class="fa fa-angle-right"></i>Contact With Us</a></li>

                                        </ul>
                                    </div>
                                </div>

                                <div class="col-md-3 col-sm-6">
                                    <div class="footer-widgets ">
                                        <h2>Top Categories</h2>

                                        <ul>
                                            <li><a href="list.php?catt=MTYy"><i class="fa fa-angle-right"></i>animal felware</a></li>
                                            <li><a href="list.php?catt=MTYx"><i class="fa fa-angle-right"></i>technology</a></li>
                                            <li><a href="list.php?catt=MjE4"><i class="fa fa-angle-right"></i>sports</a></li>
                                            <li><a href="list.php?catt=MTYw"><i class="fa fa-angle-right"></i>community development</a></li>
                                            <li><a href="list.php?catt=MTY0"><i class="fa fa-angle-right"></i>creative</a></li>
                                            <li><a href="list.php?catt=MjE1"><i class="fa fa-angle-right"></i>environment</a></li>
                                            <li><a href="list.php?catt=MjE0"><i class="fa fa-angle-right"></i>women empowerment</a></li>

                                        </ul>
                                    </div>
                                </div>



                                <div class="col-md-3 col-sm-6">
                                    <div class="footer-widgets m-unset">
                                        <p><img src="admin/uploads/general_setting/logo.png" alt="" /></p>
                                        <p>Lorem ipsum dolor sit amet, sed do eiusmod temporia.Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor adipiscing elit. Aenean commodo ligula eget dolor eiusmod temporia. Aenean adipiscing massa.</p>
                                        <div class="subscribe-box">
                                            <form method="post" action="" >
                                                <input type="email" placeholder="Subscribe Here" name="sub_email" required />
                                                <button type="submit" name="subsubmit" class="donate-btn more-btn hvr-shutter-out-horizontal het-35"><i class="fa fa-send"></i>send</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-footer-area">
                        <div class="container">

                            <div class="row">
                                <div class="col-sm-6 text-left">
                                    <div class="copy-right">
                                        <p>Copyright &copy; 2021 <a href="http://74.124.215.220/~demolin/demo/crowdfunding-mlm/" target="_blank">www.Domain.com</a> all rights reserved.</p>
                                    </div>
                                </div>
                                <div class="col-sm-3 text-left">
                                    {/* <div class="copy-right">
                                        <p>Designed by <a href="https://phpscriptsmall.com" target="_blank">PHP Scripts Mall.</a></p>
                                    </div> */}
                                </div>
                                <div class="col-sm-3 text-right">
                                    <div class="footer-social-link">
                                        <a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="https://twitter.com/"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="https://in.linkedin.com/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                        <a href="https://in.pinterest.com/"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                                        <a href="https://plus.google.com/"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           
        );
    }
}

Footer.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Footer);
