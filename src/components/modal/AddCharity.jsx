import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '../input/Input';
import TitleInput from '../input/TitleInput';
import InputTransfer from '../donation/InputTransfer';
import { createCharity } from '../../redux/actions/charity';
import { useDispatch, useSelector } from 'react-redux';

const AddCharity = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const [image, setimage] = useState();
    const [title, settitle] = useState();
    const [description, setdescription] = useState();
    const [goal, setgoal] = useState();
    const [thumb, setthumb] = useState('')

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
    

    const onHandle = () => {
        dispatch(createCharity(title, description, goal, image)).then(() =>{
            window.location.reload()
        });
    }

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

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
                        <TitleInput title="Title" />

                        <Input name="Title" type="text" onChange={(event) => { settitle(event.target.value) }}/>

                        <TitleInput title="Description" />

                        <div className='mb-2'>
                            <textarea name="description" rows="3" class="form-control" id="description"
                                    placeholder="Description" onChange={(event) => { setdescription(event.target.value) }}></textarea>
                        </div>

                        <TitleInput title="Goal" />

                        <InputTransfer placeholder={`Rp`} value="Nominal" disable={false} onChange={(event) => { setgoal(event.target.value) }}/>

                        <TitleInput title="Image" />

                        <div class="col-lg-12 col-12">
                            <div class="input-group input-group-file mb-3">
                                <input type="file" class="form-control" id="inputGroupFile02" onChange={handleFileChange}/>
                                
                                <label class="input-group-text" id="custom-label-file" for="inputGroupFile02">
                                    {thumb ? thumb : "Upload Proof of Payment" }
                                </label>

                                <i class="bi-cloud-arrow-up ms-auto"></i>
                            </div>
                            
                        </div>

                        <div className="col-lg-12 col-12 p-2 m-2 justify-content-center text-center row">
                            <button type="button" className="form-control col-4 mb-3"  onClick={onHandle}>Create</button>
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

export default AddCharity;