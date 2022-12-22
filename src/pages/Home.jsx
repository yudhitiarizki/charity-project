import React from 'react';
import MyCharityCards from '../components/Cards/MyCharityCards';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
    return (
        <main>
           <Navbar> </Navbar>
        <section class="hero-section hero-section-full-height">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-lg-12 col-12 p-0">
                        <div id="hero-slide" class="carousel carousel-fade slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/slide/slide_1.jpg`}
                                        class="carousel-image img-fluid" alt="..." />

                                    <div class="carousel-caption d-flex flex-column justify-content-end">
                                        <h1>be a Kind Heart</h1>

                                        <p>A Mini Project about Charity</p>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/slide/slide_2.jpg`}
                                        class="carousel-image img-fluid" alt="..." />

                                    <div class="carousel-caption d-flex flex-column justify-content-end">
                                        <h1>Non-profit</h1>

                                        <p>You can support us to grow more</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/slide/slide_3.jpg`}
                                        class="carousel-image img-fluid" alt="..." />

                                    <div class="carousel-caption d-flex flex-column justify-content-end">
                                        <h1>Humanity</h1>

                                        <p>Please tell anyone about this project</p>
                                    </div>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#hero-slide"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>

                            <button class="carousel-control-next" type="button" data-bs-target="#hero-slide"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                  <div class="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg`} class="carousel-image img-fluid" alt="..." />

                    <div class="carousel-caption d-flex flex-column justify-content-end">
                      <h1>Non-profit</h1>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/slide/medium-shot-people-collecting-donations.jpg`} class="carousel-image img-fluid" alt="..." />

                    <div class="col-lg-10 col-12 text-center mx-auto">
                        <h2 class="mb-5">Welcome to Love Charity</h2>

                    </div>
                  </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
        </section>

        <section class="section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-12 text-center mx-auto">
                <h2 class="mb-5">Welcome to Kind Heart Charity</h2>
              </div>

              <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div class="featured-block d-flex justify-content-center align-items-center">
                  <a href="donate.html" class="d-block">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/icons/hands.png`} class="featured-block-image img-fluid" alt="" />

                    <p class="featured-block-text">
                      Become a <strong>volunteer</strong>
                    </p>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                <div class="featured-block d-flex justify-content-center align-items-center">
                  <a href="donate.html" class="d-block">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/icons/heart.png`} class="featured-block-image img-fluid" alt="" />

                    <p class="featured-block-text">
                      <strong>Caring</strong> Earth
                    </p>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                <div class="featured-block d-flex justify-content-center align-items-center">
                  <a href="donate.html" class="d-block">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/icons/receive.png`} class="featured-block-image img-fluid" alt="" />

                    <p class="featured-block-text">
                      Make a <strong>Donation</strong>
                    </p>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div class="featured-block d-flex justify-content-center align-items-center">
                  <a href="donate.html" class="d-block">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/icons/scholarship.png`} class="featured-block-image img-fluid" alt="" />

                    <p class="featured-block-text">
                      <strong>Scholarship</strong> Program
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-padding section-bg" id="section_2">
          <div class="container">
            <div class="row">
{/* 
              <div class="col-lg-6 col-12 mb-5 mb-lg-0">
                <img src={`${process.env.PUBLIC_URL}/assets/images/group-people-volunteering-foodbank-poor-people.jpg`} class="custom-text-box-image img-fluid" alt="" />
              </div> */}

              <div class="col-lg-6 col-12">
                <div class="custom-text-box">
                  <h2 class="mb-2">Our Story</h2>

                      <div class="col-lg-6 col-12 mb-5 mb-lg-0">
                          <img src={`${process.env.PUBLIC_URL}/assets/images/TEAM.png`}
                              class="custom-text-box-image img-fluid" alt=""/>
                      </div>

                      <div class="col-lg-6 col-12">
                          <div class="custom-text-box">
                              <h2 class="mb-2">Our Story</h2>

                              <h5 class="mb-3">TeamEleven</h5>

                              <p class="mb-0">We are from different islands and met at the ZEP. we want to help everyone who wants to do charity</p>
                          </div>

                          <div class="row">
                              <div class="col-lg-6 col-md-6 col-12">
                                  <div class="custom-text-box mb-lg-0">
                                      <h5 class="mb-3">Our Mission</h5>

                                      <p>helping everyone who wants to do charity but don't know where to start without looking</p>

                                      <ul class="custom-list mt-2">
                                          <li class="custom-list-item d-flex">
                                              <i class="bi-check custom-text-box-icon me-2"></i>
                                              Old
                                          </li>

                                          <li class="custom-list-item d-flex">
                                              <i class="bi-check custom-text-box-icon me-2"></i>
                                              Young
                                          </li>
                                      </ul>
                                  </div>
                              </div>

                              <div class="col-lg-6 col-md-6 col-12">
                                  <div class="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                                      <div class="counter-thumb">
                                          <div class="d-flex">
                                              <span class="counter-number" data-from="1" data-to="2009"
                                                  data-speed="1000"></span>
                                              <span class="counter-number-text"></span>
                                          </div>

                                          <span class="counter-text">Main Destination</span>
                                      </div>

                                      <div class="counter-thumb mt-4">
                                          <div class="d-flex">
                                              <span class="counter-number" data-from="1" data-to="120"
                                                  data-speed="1000"></span>
                                              <span class="counter-number-text">Full</span>
                                          </div>

                                          <span class="counter-text">Donations</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="custom-text-box mb-lg-0">
                      <h5 class="mb-3">Our Mission</h5>

                      <p>To helping people with the our charity on it </p>

                      <ul class="custom-list mt-2">
                        <li class="custom-list-item d-flex">
                          <i class="bi-check custom-text-box-icon me-2"></i>
                          Helping
                        </li>

                        <li class="custom-list-item d-flex">
                          <i class="bi-check custom-text-box-icon me-2"></i>
                          Happy
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                      <div class="counter-thumb">
                        <div class="d-flex">
                          <span class="counter-number" data-from="1" data-to="2009" data-speed="1000"></span>
                          <span class="counter-number-text"></span>
                        </div>

                        <span class="counter-text">Founded</span>
                      </div>

                      <div class="counter-thumb mt-4">
                        <div class="d-flex">
                          <span class="counter-number" data-from="1" data-to="120" data-speed="1000"></span>
                          <span class="counter-number-text">Help</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section class="cta-section section-padding section-bg">
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-5 col-12 ms-auto">
                <h2 class="mb-0">Make an impact. Save lives.</h2>
              </div>

              <div class="col-lg-5 col-12">
                <Link to="Login" className="custom-btn btn smoothscroll">
                  Make A donation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section class="section-padding" id="section_3">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-12 text-center mb-4">
                <h2>Our Causes</h2>
              </div>

              <div className="col-lg-12 col-12 row">
                <MyCharityCards
                  image={`${process.env.PUBLIC_URL}/assets/images/causes/group-african-kids-paying-attention-class.jpg`}
                  title="Children Education"
                  description="Helping the child to study on academic "
                  raised={30000}
                  goal={60000}
                />

                <MyCharityCards image={`${process.env.PUBLIC_URL}/assets/images/causes/naturaldisaster.jpg`} title="Natural Disasters" description="Help people affected on natural disaster" raised={35000} goal={600000} />

                <MyCharityCards
                  image={`${process.env.PUBLIC_URL}/assets/images/causes/disabledpeople.jpg`}
                  title="Disabled People"
                  description="Helping the people with the disabled and people with the spesial needs"
                  raised={300000}
                  goal={6900000}
                />
              </div>
            </div>
          </div>
        </section>
        <section class="testimonial-section section-padding section-bg">
          <div class="container">
              <div class="row">

                <div class="col-lg-8 col-12 mx-auto">
                  <h2 class="mb-lg-3">Our Quotes</h2>\
                  <div id="testimonial-carousel" class="carousel carousel-fade slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="carousel-caption">
                          <h4 class="carousel-title">We are making a charity website</h4>

                          <small class="carousel-name">
                            <span class="carousel-name-title">Team</span>
                            Eleven
                          </small>
                        </div>
                      </div>

                      <div class="carousel-item">
                        <div class="carousel-caption">
                          <h4 class="carousel-title">Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci</h4>

                          <small class="carousel-name">
                            <span class="carousel-name-title">Thomas</span>, Partner
                          </small>
                        </div>
                      </div>

                      <div class="carousel-item">
                        <div class="carousel-caption">
                          <h4 class="carousel-title">Helping people is really helpfull when that people need that</h4>

                          <small class="carousel-name">
                            <span class="carousel-name-title">Team</span> 11
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
        </section>
        
    </main>
  );
};

export default Home;
