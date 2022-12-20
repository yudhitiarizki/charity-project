import {
    FETCH_PAYMENT,
    CREATE_PAYMENT,
    PUT_PAYMENT,
    GET_PAYMENTBYSLUG,
    SET_MESSAGE
} from './types';

import PaymentService from '../../services/payment';

export const getPayment = (userId) => async dispatch => {
    return PaymentService.getPayment(userId).then(
        response => {

            dispatch({
                type: FETCH_PAYMENT,
                payload: {
                    payment: response.data.payment
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

export const createPayment = (method, number, username) => async dispatch => {
    return PaymentService.createPayment(method, number, username).then(
        response  => {
            dispatch({
                type: CREATE_PAYMENT
            })

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

export const putPayment = (paymentId, method, number, username) => async dispatch => {
    return PaymentService.putPayment(paymentId, method, number, username).then(
        response => {
            dispatch({
                type: PUT_PAYMENT
            });

            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: response.data.message,
                    status: response.status
                }
            })
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
        }
    )
}

export const getPaymentBySlug = (slug) => async dispatch => {
    return PaymentService.getPaymentBySlug(slug).then(
        response => {
            dispatch({
                type: GET_PAYMENTBYSLUG,
                payload: {
                    payment: response.data.payments
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

