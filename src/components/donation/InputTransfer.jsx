import React from 'react'

const InputTransfer = (props) => {

    var value;

    if (!props.value){
        value = `${props.number} ${props.method}`;
    } else {
        value = `${props.value}`;
    }

    const func = props.onChange;

    return (
        <div className="col-lg-12 col-12 form-check-group">
            <div className="input-group">
                <span className="input-group-text" id="basic-addon1">{props.placeholder}</span>

                <input type="text" className="form-control" placeholder={value}
                    aria-label="Username" aria-describedby="basic-addon1" disabled={props.disable} onChange={func}/>
            </div>
        </div>
    )
    
}

export default InputTransfer;