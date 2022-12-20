import React from 'react';

const InputName = (props) => {

    const func1 = props.onChangeFirst;
    const func2 = props.onChangeLast;

    return(
        <>
            <div className="col-lg-6 col-12 m-0 mb-2 personal-info">
                <input type="text" name="firstName" id="firstName" className="form-control"
                    placeholder="First Name" onChange={func1}/>
            </div>
            <div className="col-lg-6 col-12 m-0 mb-2 personal-info">
                <input type="text" name="lastName" id="lastName" className="form-control"
                    placeholder="Last Name" onChange={func2}/>
            </div>
        </>
    )
    
};

export default InputName;