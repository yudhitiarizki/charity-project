import React, { useEffect, useState } from 'react';
import InputTransfer from '../components/donation/InputTransfer';
import Navbar from '../components/navbar/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCharityBySlug } from '../redux/actions/charity';
import { getPaymentBySlug } from '../redux/actions/payment';
import { createDonate } from '../redux/actions/donate';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/assets/style/style.css';
import '../components/assets/style/bootstrap-icons.css'

const Donation = () => {
    const dispatch = useDispatch()
    
    const navigate = useNavigate();
    
    const charities = useSelector(state => state.charity);
    const payments = useSelector(state => state.payment);
    const { message } = useSelector(state => state.message)
    const { isLoggedIn, user } = useSelector(state => state.auth);

    const [anonym, setanonym] = useState(true);
    const [payment, setpayment] = useState({
        method: "",
        number: ""
    });
    const [donate, setdonate] = useState('');
    const [image, setimage] = useState('');
    const [paymentId, setpaymentid] = useState('');
    const [thumb, setthumb] = useState('');
    const [userId, setUserId] = useState(user.userId);


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        setthumb(selectedFile.name);

        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
            const fileData = reader.result;
            setimage(fileData);
        }
    };

    const onChangePayment = (paymentId, method, number) => {
        setpayment({method:method, number:number});
        setpaymentid(paymentId);
    } 

    const { slug } = useParams()

    useEffect(() => {
        dispatch(getCharityBySlug(slug));
        dispatch(getPaymentBySlug(slug));
    }, [dispatch]);


    const login = () => {
        navigate('/login')
    }

    const onSubmit = () => {
        if (anonym){
            setUserId(0);
        };
        dispatch(createDonate(donate, paymentId, userId, image, slug))
    }

    return (
        <>
            <Navbar/>
            <main>

                <section className="donate-section">
                    <div className="section-overlay"></div>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-12 mx-auto">
                                <div className="custom-form donate-form" action="#" method="get" role="form">
                                    <h3 className="mb-4">Donation</h3>

                                    <div className="row">
                                        {message.message && (
                                            message.status < 400 ? (
                                                <div className="form-group mt-0">
                                                    <div className="alert alert-success" role="alert">
                                                        {message.message}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="form-group mt-0">
                                                    <div className="alert alert-danger" role="alert">
                                                        {message.message}
                                                    </div>
                                                </div>
                                            )
                                        )}

                                        <div className="col-lg-12 col-12">
                                            <h5 className="mb-3">Personal Info</h5>
                                        </div>

                                        { isLoggedIn ? (
                                            <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency non-anonym">
                                                <div className="form-check form-check-radio">
                                                    <input className="form-check-input" type="radio" id='non-anonym' name="Personal-info" onClick={() => {setanonym(false)}} />

                                                    <label className="form-check-label" htmlFor="non-anonym">
                                                        Your Data
                                                    </label>
                                                </div>
                                                <p></p>
                                            </div>
                                        ) : (
                                            <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency non-anonym">
                                                <div className="form-check form-check-radio">
                                                    <input className="form-check-input" type="radio" id='non-anonym' name="Personal-info" onClick={() => {login()}} />

                                                    <label className="form-check-label" htmlFor="non-anonym">
                                                        Your Data
                                                    </label>
                                                </div>
                                                <p></p>
                                            </div>
                                        ) }

                                        

                                        <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                                            <div className="form-check form-check-radio">
                                                <input className="form-check-input" type="radio" name="Personal-info" onClick={() => {setanonym(true)}} id="Anonymous" checked={anonym}/>

                                                <label className="form-check-label" htmlFor="Anonymous">
                                                    Anonymous
                                                </label>
                                            </div>
                                        </div>

                                            

                                        <div className="col-lg-12 col-12 mt-3">
                                            <h5 className="mt-2 mb-3">Amount</h5>
                                        </div>

                                        <div className="col-lg-12 col-12 form-check-group">
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1">Rp</span>

                                                <input type="text" className="form-control" placeholder="Amount"
                                                    aria-label="Username" aria-describedby="basic-addon1" onChange={(event) => {setdonate(event.target.value)}} />
                                            </div>
                                        </div>

                                        

                                        <div className="col-lg-12 col-12 mb-2 ">
                                            <h5 className="mt-4">Choose Payment</h5>
                                        </div>

                                        <div className="col-lg-12 col-12 row">

                                            {
                                                payments.map((pay) => (
                                                    <div className="col-lg-3 col-6 form-check-group form-check-group-donation-frequency bca">
                                                        <div className="form-check form-check-radio">
                                                            <input className="form-check-input" type="radio" name="payment"
                                                                id="bca" onChange={() => {onChangePayment(pay.paymentId, pay.method, pay.number)}} />

                                                            <label className="form-check-label" htmlFor="bca">
                                                                {pay.method}
                                                            </label>
                                                        </div>
                                                        <p></p>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        { payment.method ? <InputTransfer placeholder={`Transfer to`} number={`${payment.number}`} method={`${payment.method}`} disable={true}/> : <></>}
                                        

                                        <div class="col-lg-12 col-12">
                                            <div class="input-group input-group-file mb-0">
                                                <input type="file" class="form-control" id="inputGroupFile02" onChange={handleFileChange}/>
                                                
                                                <label class="input-group-text" id="custom-label-file" for="inputGroupFile02">
                                                    {thumb ? thumb : "Upload Proof of Payment" }
                                                </label>

                                                <i class="bi-cloud-arrow-up ms-auto"></i>
                                            </div>
                                            
                                        </div>

                                        <div className="col-lg-12 col-12 mt-3">

                                            <button type="button" onClick={()=> {onSubmit()}} className="form-control mt-2">Submit Donation</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                </main>
        </>
        
    );
};

export default Donation;
