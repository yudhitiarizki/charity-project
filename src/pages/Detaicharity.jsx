import React from "react";
import MyCharityCards from "../components/Cards/MyCharityCards";
import { Link } from "react-router-dom";


const Detailcharity = () => {
  return (
    <main>
      <section className="news-detail-header-section text-center">
        <div className="section-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h1 className="text-white">Detail Charity</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="news-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="news-block">
                <div className="news-block-top">
                  <img src="images/news/medium-shot-volunteers-with-clothing-donations.jpg" className="news-image img-fluid" alt="" />
                  <div className="news-category-block">
                    <a href="#" className="category-block-link">
                      Lifestyle,
                    </a>
                    <a href="#" className="category-block-link">
                      Clothing Donation
                    </a>
                  </div>
                </div>
                <div className="news-block-info">
                  <div className="d-flex mt-2">
                    <div className="news-block-date">
                      <p>
                        <i className="bi-calendar4 custom-icon me-1" />
                        October 22, 2022
                      </p>
                    </div>
                    <div className="news-block-author mx-5">
                      <p>
                        <i className="bi-person custom-icon me-1" />
                      </p>
                    </div>
                    <div className="news-block-comment">
                      <p>
                        <i className="bi-chat-left custom-icon me-1" />
                      </p>
                    </div>
                  </div>
                  <div className="news-block-title mb-2">
                    <h4>Clothing donation to Chiilren Education</h4>
                  </div>
                  <div className="news-block-body">
                    <p>
                      <strong>Donate</strong> clothing to a student on africa to having a good uniform to study{" "}
                    </p>
                    <p>
                      <strong>Make</strong> a student feeling good at education like school and sometihing else
                    </p>
                    <blockquote>a student feeling good at education like school and sometihing else </blockquote>
                  </div>
                  <div className="row mt-5 mb-4">
                    <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                      <img src="images/news/africa-humanitarian-aid-doctor.jpg" className="news-detail-image img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 col-12">
                      <img src="images/news/close-up-happy-people-working-together.jpg" className="news-detail-image img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="social-share border-top mt-5 py-4 d-flex flex-wrap align-items-center">
                    <div className="d-flex">
                      <a href="#" className="social-icon-link bi-facebook" />
                      <a href="#" className="social-icon-link bi-twitter" />
                      <a href="#" className="social-icon-link bi-printer" />
                      <a href="#" className="social-icon-link bi-envelope" />
                    </div>
                  </div>
                  <div className="author-comment d-flex mt-3 mb-4">
                    <img src="images/avatar/studio-portrait-emotional-happy-funny.jpg" className="img-fluid avatar-image" alt="" />
                    <div className="author-comment-info ms-3">
                      <h6 className="mb-1">Jack</h6>
                      <p className="mb-0">really helpfull hope they are happy and use it corectly for the donation</p>
                      <div className="d-flex mt-2">
                        <a href="#" className="author-comment-link me-3">
                          Like
                        </a>
                        <a href="#" className="author-comment-link">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="author-comment d-flex ms-5 ps-3">
                    <img src="images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg" className="img-fluid avatar-image" alt="" />
                    <div className="author-comment-info ms-3">
                      <h6 className="mb-1">Daisy</h6>
                      <p className="mb-0">great really helpfull</p>
                      <div className="d-flex mt-2">
                        <a href="#" className="author-comment-link me-3">
                          Like
                        </a>
                        <a href="#" className="author-comment-link">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="author-comment d-flex mt-3 mb-4">
                    <img src="images/avatar/portrait-young-redhead-bearded-male.jpg" className="img-fluid avatar-image" alt="" />
                    <div className="author-comment-info ms-3">
                      <h6 className="mb-1">Wilson</h6>
                      <p className="mb-0">Really helpfull for the people who need is </p>
                      <div className="d-flex mt-2">
                        <a href="#" className="author-comment-link me-3">
                          Like
                        </a>
                        <a href="#" className="author-comment-link">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <form className="custom-form comment-form mt-4" action="#" method="post" role="form">
                    <h6 className="mb-3">Write a comment</h6>
                    <textarea name="comment-message" rows={4} className="form-control" id="comment-message" placeholder="Your comment here" defaultValue={""} />
                    <div className="col-lg-3 col-md-4 col-6 ms-auto">
                      <button type="submit" className="form-control">
                        Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mx-auto mt-4 mt-lg-0">
              <form className="custom-form search-form" action="#" method="post" role="form">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button type="submit" className="form-control">
                  <i className="bi-search" />
                </button>
              </form>
              <h5 className="mt-5 mb-3">Recent news</h5>
              <div className="news-block news-block-two-col d-flex mt-4">
                <div className="news-block-two-col-image-wrap">
                  <a href="news-detail.html">
                    <img src="images/news/africa-humanitarian-aid-doctor.jpg" className="news-image img-fluid" alt="" />
                  </a>
                </div>
                <div className="news-block-two-col-info">
                  <div className="news-block-title mb-2">
                    <h6>
                      <a href="news-detail.html" className="news-block-title-link">
                        Food donation area
                      </a>
                    </h6>
                  </div>
                  <div className="news-block-date">
                    <p>
                      <i className="bi-calendar4 custom-icon me-1" />
                      October 16, 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="news-block news-block-two-col d-flex mt-4">
                <div className="news-block-two-col-image-wrap">
                  <a href="news-detail.html">
                    <img src="images/news/close-up-happy-people-working-together.jpg" className="news-image img-fluid" alt="" />
                  </a>
                </div>
                <div className="news-block-two-col-info">
                  <div className="news-block-title mb-2">
                    <h6>
                      <a href="news-detail.html" className="news-block-title-link">
                        Volunteering Clean
                      </a>
                    </h6>
                  </div>
                  <div className="news-block-date">
                    <p>
                      <i className="bi-calendar4 custom-icon me-1" />
                      October 20, 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="category-block d-flex flex-column">
                <h5 className="mb-3">Categories</h5>
                <a href="#" className="category-block-link">
                  Drinking water
                  <span className="badge">20</span>
                </a>
                <a href="#" className="category-block-link">
                  Food Donation
                  <span className="badge">30</span>
                </a>
                <a href="#" className="category-block-link">
                  Children Education
                  <span className="badge">10</span>
                </a>
                <a href="#" className="category-block-link">
                  Poverty Development
                  <span className="badge">15</span>
                </a>
                <a href="#" className="category-block-link">
                  Clothing Donation
                  <span className="badge">20</span>
                </a>
              </div>
              <div className="tags-block">
                <h5 className="mb-3">Tags</h5>
                <a href="#" className="tags-block-link">
                  Donation
                </a>
                <a href="#" className="tags-block-link">
                  Clothing
                </a>
                <a href="#" className="tags-block-link">
                  Food
                </a>
                <a href="#" className="tags-block-link">
                  Children
                </a>
                <a href="#" className="tags-block-link">
                  Education
                </a>
                <a href="#" className="tags-block-link">
                  Poverty
                </a>
                <a href="#" className="tags-block-link">
                  Clean Water
                </a>
              </div>
              <form className="custom-form subscribe-form" action="#" method="post" role="form">
                <h5 className="mb-4">Newsletter Form</h5>
                <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email Address" required="" />
                <div className="col-lg-12 col-12">
                  <button type="submit" className="form-control">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="news-section section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 mb-4">
              <h2>Related news</h2>
            </div>
            <div className="col-lg-6 col-12">
              <div className="news-block">
                <div className="news-block-top">
                  <a href="news-detail.html">
                    <img src="images/news/medium-shot-volunteers-with-clothing-donations.jpg" className="news-image img-fluid" alt="" />
                  </a>
                  <div className="news-category-block">
                    <a href="#" className="category-block-link">
                      Lifestyle,
                    </a>
                    <a href="#" className="category-block-link">
                      Clothing Donation
                    </a>
                  </div>
                </div>
                <div className="news-block-info">
                  <div className="d-flex mt-2">
                    <div className="news-block-date">
                      <p>
                        <i className="bi-calendar4 custom-icon me-1" />
                        October 16, 2022
                      </p>
                    </div>
                    <div className="news-block-author mx-5"></div>
                    <div className="news-block-comment"></div>
                  </div>
                  <div className="news-block-title mb-2">
                    <h4>
                      <a href="news-detail.html" className="news-block-title-link">
                        Clothing donation to urban area
                      </a>
                    </h4>
                  </div>
                  <div className="news-block-body">
                    <p>Donating a clothes and also the uniform for the poeple need it </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="news-block">
                <div className="news-block-top">
                  <a href="news-detail.html">
                    <img src="images/news/medium-shot-people-collecting-foodstuff.jpg" className="news-image img-fluid" alt="" />
                  </a>
                  <div className="news-category-block">
                    <a href="#" className="category-block-link">
                      Food,
                    </a>
                    <a href="#" className="category-block-link">
                      Donation,
                    </a>
                    <a href="#" className="category-block-link">
                      Caring
                    </a>
                  </div>
                </div>
                <div className="news-block-info">
                  <div className="d-flex mt-2">
                    <div className="news-block-date">
                      <p>
                        <i className="bi-calendar4 custom-icon me-1" />
                        October 20, 2022
                      </p>
                    </div>
                    <div className="news-block-author mx-5"></div>
                    <div className="news-block-comment"></div>
                  </div>
                  <div className="news-block-title mb-2">
                    <h4>
                      <a href="news-detail.html" className="news-block-title-link">
                        Food donation area
                      </a>
                    </h4>
                  </div>
                  <div className="news-block-body">
                    <p>Food donation to people with natural disaster and also the hungry people </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

export default Detailcharity;
