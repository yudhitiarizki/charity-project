import React from 'react';

const Header = (props) => {
    return (
        <section className="news-detail-header-section text-center">
            <div className="section-overlay"></div>

            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12">
                        <h1 className="text-white">{props.title}</h1>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Header;