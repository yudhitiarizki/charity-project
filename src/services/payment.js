import api from '../api';

const getPayment = (userId) => {
    return api.get(`/payment/${userId}`);
};

const getPaymentBySlug = (slug) => {
    return api.get(`/payment-slug/${slug}`);
}


const createPayment = (data) => {
    return api.post('/payment', {
        data
    })
}

const putPayment = (data) => {
    return api.put(`/payment/${data.paymentId}`, {
        data
    })
}

const PaymentService = {
    getPayment,
    createPayment, 
    putPayment,
    getPaymentBySlug
}

export default PaymentService;