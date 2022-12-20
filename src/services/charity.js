import api from '../api';


const getCharity = () => {
    return api.get('/charity');
};

const getCharityByUser = () => {
    return api.get('/charity-user');
};

const getCharityBySlug = (slug) => {
    return api.get(`/charity/${slug}`)
}

const createCharity = (title, description, goal, image) => {
    return api.post('/charity', {
        title, description, goal, image
    })
}

const deleteCharity = (charityId) => {
    return api.delete(`/charity/${charityId}`)
}

const CharityService = {
    getCharity,
    createCharity,
    getCharityByUser,
    getCharityBySlug,
    deleteCharity,
}

export default CharityService;