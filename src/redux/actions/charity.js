import {
    FECTH_CHARITY_SUCCESS,
    FECTH_CHARITY_FAIL,
    FETCH_CHARITYBYUSER_SUCCESS,
    FETCH_CHARITYBYUSER_FAIL,
    CREATE_CHARITY_SUCCESS,
    DELETE_CHARITY,
    FETCH_CHARITYBYSLUG,
    SET_MESSAGE,
} from './types';

import CharityService from '../../services/charity';

export const getCharity = () => async dispatch => {
    return CharityService.getCharity().then(
        response => {
            dispatch({
                type: FECTH_CHARITY_SUCCESS,
                payload: {
                    charity: response.data.charities
                }
            });

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                },
            });

            return Promise.resolve();
        },
        error => {

            dispatch({
                type: FECTH_CHARITY_FAIL,
                payload: message,
            });

            const message = error.response;

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: message.data.message,
                    type: message.status
                },
            });

            return Promise.reject();
        }
    )
}

export const createCharity = (title, description, goal, image) => async dispatch => {
    return CharityService.createCharity(title, description, goal, image).then(
        response => {
            dispatch({
                type: CREATE_CHARITY_SUCCESS,
            });
            

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                },
            });


            return Promise.resolve();
        },
        error => {
            const message = error.response;

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: message.data.message,
                    status: message.status
                },
            });

            return Promise.reject();
        },
    )

}

export const getCharityByUser = () => async dispatch => {
    return CharityService.getCharityByUser().then(
        response => {
            dispatch({
                type: FETCH_CHARITYBYUSER_SUCCESS,
                payload: {
                    charity: response.data.charities
                }
            });

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                },
            });

            return Promise.resolve();
        },
        error => {

            dispatch({
                type: FETCH_CHARITYBYUSER_FAIL,
                payload: message,
            });

            const message = error.response;

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: message.data.message,
                    status: message.status
                },
            });

            return Promise.reject();
        }
    )
}

export const deleteCharity = (charityId) => async dispatch => {
    return CharityService.deleteCharity(charityId).then(
        response => {
            dispatch({
                type: DELETE_CHARITY,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                },
            });

            return Promise.resolve();
        },
        error => {
            const message = error.response;

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: message.data.message,
                    status: message.status
                },
            });

            return Promise.reject();
        })

}

export const getCharityBySlug = (slug) => async dispatch => {
    return CharityService.getCharityBySlug(slug).then(
        response => {
            dispatch({
                type: FETCH_CHARITYBYSLUG,
                payload: response.data.charities
            });
            
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                },
            });

            return Promise.resolve()
        }, 
        error => {
            const message = error.response;

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: message.data.message,
                    status: message.status
                },
            });

            return Promise.reject();
        }
    )
}