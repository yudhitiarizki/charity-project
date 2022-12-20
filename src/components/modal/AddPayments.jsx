import React, { useState } from 'react';
import Input from '../input/Input';
import TitleInput from '../input/TitleInput';
import { useDispatch, useSelector } from 'react-redux';
import { createPayment, putPayment } from '../../redux/actions/payment';

const AddPayments = (props) => {
    const dispatch = useDispatch();

    const { message } = useSelector(state => state.message);

    const payment = props.data;

    console.log(payment)

    const bca = payment.filter((pay) => {
        return pay.method === "BCA";
    })

    const ovo = payment.filter((pay) => {
        return pay.method === "OVO";
    })

    const gopay = payment.filter((pay) => {
        return pay.method === "GOPAY";
    })

    const [bcaNum, setbcaNum] = useState('');
    const [bcaName, setbcaName] = useState('');

    const [ovoNum, setovoNum] = useState('');
    const [ovoName, setovoName] = useState('');

    const [gopayNum, setgopayNum] = useState('');
    const [gopayName, setgopayName] = useState('');


    const onCreateBca = () => {
        dispatch(createPayment({
            method: "BCA", 
            number: bcaNum, 
            username: bcaName
        })).then(() => {
            window.location.reload()
        })
    };

    const onCreateGopay = () => {
        dispatch(createPayment({
            method: "GOPAY", 
            number: gopayNum, 
            username: gopayName
        })).then(() => {
            window.location.reload()
        })
    };

    const onCreateOVO = () => {
        dispatch(createPayment({
            method: "OVO", 
            number: ovoNum, 
            username: ovoName
        })).then(() => {
            window.location.reload()
        })
    };

    const onPutBca = (id) => {
        dispatch(putPayment({
            paymentId: id,
            method: "BCA", 
            number: bcaNum, 
            username: bcaName
        })).then(() => {
            window.location.reload()
        })
    };

    const onPutGopay = (id) => {
        dispatch(putPayment({
            paymentId: id,
            method: "GOPAY", 
            number: gopayNum, 
            username: gopayName
        })).then(() => {
            window.location.reload()
        })
    };

    const onPutOVO = (id) => {
        dispatch(putPayment({
            paymentId: id,
            method: "OVO", 
            number: ovoNum, 
            username: ovoName
        })).then(() => {
            window.location.reload()
        })
    };

    

   
    
    return (
        <div class="modal fade" id={props.name} tabindex="-1" aria-labelledby="CharityModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-body p-0">

                <div className="custom-form donate-form" action="#" method="get" role="form">
                    <h3 className="mb-4 text-center">{props.title}</h3>

                    <div className="row p-0 justify-content-center">
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

                        <TitleInput title="BCA" />

                        {
                            bca.length ? (
                                <>
                                    <Input name={bca[0].number} type="text" onChange={(event) => {setbcaNum(event.target.value)}}/>
                                    <Input name={bca[0].username} type="text" onChange={(event) => {setbcaName(event.target.value)}}/>

                                    <div className='mt-2'>
                                        <button className='col-5 col-lg-3 btn btn-primary align-self-start x-s' onClick={() => {onPutBca(bca[0].paymentId)}}>Save</button> 
                                    </div>
                                </>

                            ) : (
                                <>
                                    <Input name="Number" type="text" onChange={(event) => {setbcaNum(event.target.value)}}/>
                                    <Input name="Name Account" type="text" onChange={(event) => {setbcaName(event.target.value)}}/>

                                    <div className='mt-2'>  
                                        <button className='col-5 col-lg-3 btn btn-primary align-self-start' onClick={onCreateBca}>Create</button>    
                                    </div>
                                </>
                            )
                        }

                        

                        <TitleInput title="OVO" />

                        {
                            ovo.length ? (
                                <>
                                    <Input name={ovo[0].number} type="text" onChange={(event) => {setovoNum(event.target.value)}}/>
                                    <Input name={ovo[0].username} type="text" onChange={(event) => {setovoName(event.target.value)}}/>

                                    <div className='mt-2'>
                                        <button className='col-5 col-lg-3 btn btn-primary align-self-start x-s' onClick={() => {onPutOVO(ovo[0].paymentId)}}>Save</button> 
                                    </div>
                                </>

                            ) : (
                                <>
                                    <Input name="Number" type="text" onChange={(event) => {setovoNum(event.target.value)}}/>
                                    <Input name="Name Account" type="text" onChange={(event) => {setovoName(event.target.value)}}/>

                                    <div className='mt-2'>  
                                        <button className='col-5 col-lg-3 btn btn-primary align-self-start' onClick={onCreateOVO}>Create</button>    
                                    </div>
                                </>
                            )
                        }

                        <TitleInput title="GOPAY" />

                        {
                            gopay.length ? (
                                <>
                                    <Input name={gopay[0].number} type="text" onChange={(event) => {setgopayNum(event.target.value)}}/>
                                    <Input name={gopay[0].username} type="text" onChange={(event) => {setgopayName(event.target.value)}}/>

                                    <div className='mt-2'>
                                        <button className='col-5 col-lg-3 btn btn-primary align-self-start x-s' onClick={() => {onPutGopay(gopay[0].paymentId)}}>Save</button> 
                                    </div>
                                </>

                            ) : (
                                <>
                                    <Input name="Number" type="text" onChange={(event) => {setgopayNum(event.target.value)}}/>
                                    <Input name="Name Account" type="text" onChange={(event) => {setgopayName(event.target.value)}}/>

                                    <div className='mt-2'>  
                                        <button className='col-5 col-lg-3 btn btn-primary align-self-start' onClick={onCreateGopay}>Create</button>    
                                    </div>
                                </>
                            )
                        }

                        

                        

                        <div className="col-lg-12 col-12 p-2 m-2 justify-content-center text-center row">
                            <button type="button" className="form-control col-4 mb-3"  >Create</button>
                            <button type="button" className="form-control col-4 mb-3 " data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
        </div>
    )
}

export default AddPayments;