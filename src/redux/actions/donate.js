import {
    CREATE_DONATE,
    FETCH_DONATEBYSLUG,
    SET_MESSAGE
} from './types';

import DonateService from '../../services/donate';

export const createDonate = (donate, paymentId, userId, image, slug) => async dispatch => {
    return DonateService.createDonate(donate, paymentId, userId, image, slug).then(
        response => {
            dispatch({
                type: CREATE_DONATE
            });

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                }
            })

            return Promise.resolve()
        }, error => {
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

export const getDonateBySlug = (slug) => async dispatch => {
    return DonateService.getDonateBySlug(slug).then(
        response => {

            dispatch({
                type: FETCH_DONATEBYSLUG,
                payload: response.data.donates
            });

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                }
            })
        }, error => {
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