import api from '../api';

const getDonate = () => {
    return api.get('/donate');
};

const createDonate = (donate, paymentId, userId, image, slug) => {
    return api.post('/donate', {
        donate, paymentId, userId, image, slug
    })
};

const getDonateBySlug = (slug) => {
    return api.get(`/donate/${slug}`);
};


const DonateService = {
    getDonate,
    createDonate,
    getDonateBySlug
}

export default DonateService;