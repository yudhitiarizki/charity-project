import React from 'react';
import { Link } from 'react-router-dom';

const MyCharityCards = (props) => {

    const { image, title, description, raised, goal, id } = props;
    const progress = raised / goal * 100;

    const func = props.onClick;

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
      }

    return (
        <div class="col-lg-4 col-md-4 col-12 mb-4 mb-lg-4">
            <div class="custom-block-wrap">
                <img src={image}
                    class="custom-block-image img-fluid" alt=""/>

                <div class="custom-block">
                    <div class="custom-block-body p-3">
                        <h5 class="mb-3">{title}</h5>

                        <p>{description}</p>

                        <div class="progress mt-4">
                            <div class={`progress-bar w-${progress}`} role="progressbar" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div class="d-flex align-items-center my-2">
                            <p class="mb-0">
                                <strong>{'Raised: '}</strong>
                                 {rupiah(raised)}
                            </p>

                            <p class="ms-auto mb-0">
                                <strong>{'Goal: '}</strong>
                                {rupiah(goal)}
                            </p>
                        </div>
                    </div>

                    <div className='col-12 row m-0'>
                        
                        <Link to="/donation" class="custom-btn btn col-6">Detail</Link>
                        <button onClick={func} type="button" class="custom-btn-delete btn col-6">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyCharityCards;
