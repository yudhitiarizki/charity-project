import React from 'react';

const Footer = () => {
    return (
        <>
        <div class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-7 col-12">
                        <p class="copyright-text mb-0">Copyright © 2022 <a>Love</a> Charity 
                        </p>
                    </div>

                    <div class="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                        <ul class="social-icon">
                            <li class="social-icon-item">
                                <div class="social-icon-link bi-twitter"></div>
                            </li>

                            <li class="social-icon-item">
                                <div class="social-icon-link bi-facebook"></div>
                            </li>

                            <li class="social-icon-item">
                                <div class="social-icon-link bi-instagram"></div>
                            </li>

                            <li class="social-icon-item">
                                <div class="social-icon-link bi-linkedin"></div>
                            </li>

                            <li class="social-icon-item">
                                <div class="social-icon-link bi-youtube"></div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;