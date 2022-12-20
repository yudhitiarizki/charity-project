import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/input/Input';
import InputName from '../components/input/InputName';
import TitleInput from '../components/input/TitleInput';
import { register } from '../redux/actions/auth';
import Navbar from '../components/navbar/Navbar';

const Signup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message, status } = useSelector(state => state.message);

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState('');

    const onHandle = () => {
        dispatch(register(firstName, lastName, email, password, repassword))
            .then(() => {
                navigate('/login');
        });
    }

    if (isLoggedIn) {
        return <Navigate to="/" />;
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
                    <h3 className="mb-4 text-center">Signup</h3>

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

                        <TitleInput title="Name" />

                        <InputName onChangeFirst={(event) => { setfirstName(event.target.value) }} onChangeLast={(event) => { setlastName(event.target.value) }} />

                        <TitleInput title="Email" />

                        <Input name="Email" type="email" onChange={(event) => { setemail(event.target.value ) }}/>

                        <TitleInput title="Password" />

                        <Input name="Password" type="password" onChange={(event) => { setpassword(event.target.value) }}/>

                        <Input name="Re-Password" type="password" onChange={(event) => { setrepassword(event.target.value) }}/>

                        <div className="col-lg-12 col-12 mt-2 justify-content-center text-center">
                                <button type="button" className="form-control mt-4 mb-3" onClick={onHandle}>Register</button>
                                <p className='mt-2 mb-2'>or</p>
                                <Link to='/login' className='text-center mt-3'>Login</Link>
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

export default Signup;
