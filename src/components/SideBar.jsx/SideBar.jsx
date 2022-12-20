import React from 'react';

const SideBar = (props) => {
    const func = props.onChange;
    return (
        <div className="col-lg-4 col-12 mx-auto mt-4 mt-lg-0">
            <div className="custom-form search-form" action="#" method="post" role="form">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={func} />

                <button type="button" className="form-control" >
                    <i className="bi-search"></i>
                </button>
            </div>

            <h5 className="mt-5 mb-3">Recent Charity</h5>

            <div className="news-block news-block-two-col d-flex mt-4">
                <div className="news-block-two-col-image-wrap">
                    <div >
                        <img src={`${process.env.PUBLIC_URL}/assets/images/news/africa-humanitarian-aid-doctor.jpg`}
                            className="news-image img-fluid" alt="" />
                    </div>
                </div>

                <div className="news-block-two-col-info">
                    <div className="news-block-title mb-2">
                        <h6>Food donation area
                        </h6>
                    </div>

                    <div className="news-block-date">
                        <p>
                            <i className="bi-calendar4 custom-icon me-1"></i>
                            October 16, 2036
                        </p>
                    </div>
                </div>
            </div>

            <div className="news-block news-block-two-col d-flex mt-4">
                <div className="news-block-two-col-image-wrap">
                    <div >
                        <img src={`${process.env.PUBLIC_URL}/assets/images/news/close-up-happy-people-working-together.jpg`}
                            className="news-image img-fluid" alt="" />
                    </div>
                </div>

                <div className="news-block-two-col-info">
                    <div className="news-block-title mb-2">
                        <h6>Volunteering Clean
                        </h6>
                    </div>

                    <div className="news-block-date">
                        <p>
                            <i className="bi-calendar4 custom-icon me-1"></i>
                            October 24, 2036
                        </p>
                    </div>
                </div>
            </div>

            <div className="category-block d-flex flex-column">
                <h5 className="mb-3">Categories</h5>

                <div className="category-block-link">
                    Drinking water
                    <span className="badge">20</span>
                </div>

                <div className="category-block-link">
                    Food Donation
                    <span className="badge">30</span>
                </div>

                <div className="category-block-link">
                    Children Education
                    <span className="badge">10</span>
                </div>

                <div className="category-block-link">
                    Poverty Development
                    <span className="badge">15</span>
                </div>

                <div className="category-block-link">
                    Clothing Donation
                    <span className="badge">20</span>
                </div>
            </div>

            <div className="tags-block">
                <h5 className="mb-3">Tags</h5>

                <div className="tags-block-link">
                    Donation
                </div>

                <div className="tags-block-link">
                    Clothing
                </div>

                <div className="tags-block-link">
                    Food
                </div>

                <div className="tags-block-link">
                    Children
                </div>

                <div className="tags-block-link">
                    Education
                </div>

                <div className="tags-block-link">
                    Poverty
                </div>

                <div className="tags-block-link">
                    Clean Water
                </div>
            </div>
        </div>
    )
}

export default SideBar