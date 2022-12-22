import axios from "axios";
var token = ''
const user = JSON.parse(localStorage.getItem('user'));

if (user){
    token = user.accessToken
}

export default axios.create({
    baseURL: 'http://servermini.yudhitiarizki.my.id',
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

