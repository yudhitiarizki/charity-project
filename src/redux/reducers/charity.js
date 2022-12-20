import { 
    FECTH_CHARITY_SUCCESS, 
    CREATE_CHARITY_SUCCESS,
    FETCH_CHARITYBYUSER_FAIL,
    FETCH_CHARITYBYUSER_SUCCESS,
    DELETE_CHARITY,
    FETCH_CHARITYBYSLUG
} from "../actions/types";


const initialState = [];

const charityReducer = (charity = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case FECTH_CHARITY_SUCCESS:
            return charity = payload.charity;
        case CREATE_CHARITY_SUCCESS:
            return charity;
        case FETCH_CHARITYBYUSER_SUCCESS:
            return charity = payload.charity;
        case FETCH_CHARITYBYUSER_FAIL:
            return;
        case DELETE_CHARITY:
            return charity;
        case FETCH_CHARITYBYSLUG:
            return charity = payload;
        default: 
            return charity;
    }
}

export default charityReducer;