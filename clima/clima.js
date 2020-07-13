const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=fd529a27006a25a5b1c75f44527ae2fb&units=metric`);
    return resp.data.main.temp;

};

module.exports = {
    getClima
};