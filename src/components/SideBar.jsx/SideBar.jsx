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

        </div>
    )
}

export default SideBar