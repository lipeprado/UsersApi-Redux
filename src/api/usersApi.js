// Load axios
// function to return module
// call axios to fetch the Weather

var axios = require('axios');
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';


module.exports = {
    getUsers: function(users){
        var requestUrl = `${USERS_URL}`;
        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                console.log(res.status);
                return res.data;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }


}
