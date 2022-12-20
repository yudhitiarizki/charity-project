import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCharityByUser, deleteCharity } from '../redux/actions/charity';
import { getPayment } from '../redux/actions/payment';
import Header from '../components/navbar/Header';
import MyCharityCards from '../components/Cards/MyCharityCards';
import AddCharity from '../components/modal/AddCharity';
import AddPayments from '../components/modal/AddPayments';
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const MyCharity = () => {

    const charities = useSelector(state => state.charity);
    const payments = useSelector(state => state.payment);
    const [pay, setPay] = useState(false)

    const dispatch = useDispatch();

    const { isLoggedIn, user } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getCharityByUser());
        user && dispatch(getPayment(user.userId));
    }, [dispatch]);

    const onDelete = (id) => {
        dispatch(deleteCharity(id)).then(()=> {
            window.location.reload()
        })
    }

    return (
        <>
            <Navbar/>
            <main>
        
                <Header title="Your Charity"/> 

                {
                    isLoggedIn ? (
                        <>
                            <section className="news-section section-padding">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-12 col-lg-12 row mb-5 justify-content-center justify-content-lg-end mt-0">
                                            { pay && (
                                                <div className="form-group mt-0">
                                                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                                        You must add <strong>Payment</strong> first
                                                        <button type="button" class="btn-close" onClick={() => {setPay(false)}} data-bs-dismiss="alert" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                            ) }
                                            
                                            <button type="button" class="btn custom-btn-add col-5 col-md-4 col-lg-2 m-2 custom-m" data-bs-toggle="modal" data-bs-target="#payment">Create</button>
                                            {
                                                payments.length > 1 ? (
                                                    <button type="button" class="btn custom-btn-add col-5 col-md-4 col-lg-2 m-2 custom-m" data-bs-toggle="modal" data-bs-target="#Charity">Create</button>
                                                ) : (
                                                    <button type="button" class="btn custom-btn-add col-5 col-md-4 col-lg-2 m-2 custom-m" onClick={() => { setPay(true)} } >Create</button>
                                                )
                                            }
                                            
                                            
                                            <div class="custom-form search-form col-10 col-5 col-md-4 col-lg-4 custom-m m-2" action="#" method="post" role="form">
                                                <input class="form-control" type="search" placeholder="Search" aria-label="Search" />

                                                <button type="button" class="form-control">
                                                    <i class="bi-search"></i>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-12 row">

                                            {
                                                charities.map((charity, index) => (
                                                    <MyCharityCards 
                                                        image={charity.image} 
                                                        title={charity.title} 
                                                        description={charity.description}
                                                        raised={charity.raise}
                                                        goal={charity.goal}
                                                        onClick={() => {onDelete(charity.charityId)}} />
                                                ))
                                            }
                                        </div>

                                    </div>
                                </div>
                            </section>
                            <AddCharity title="Create Data Charity" name="Charity" />
                            <AddPayments data={payments} name="payment" title="Add Payments"/>
                        </>
                    ) : (
                        <>
                            <section className="news-section section-padding">
                                <div className='container'>
                                    <div className="row">
                                        <h1 className='text-center'>You must be Login to create Charity</h1>
                                        <div className="m-auto col-3 mt-3 justify-content-center align-items-center">
                                            <Link to={`${process.env.PUBLIC_URL}/login`} className="nav-link custom-btn custom-border-btn btn">Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                }

                


            </main>
        </>
        
    )
}

export default MyCharity;