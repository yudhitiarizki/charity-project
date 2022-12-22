import {
    CREATE_DONATE,
    FETCH_DONATEBYSLUG
} from '../actions/types';

const initialState = [];

const donateReducer = (donate = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case CREATE_DONATE:
            return donate;
        case FETCH_DONATEBYSLUG:
            return donate = payload;
        default: 
            return donate;
    }
}

export default donateReducer;