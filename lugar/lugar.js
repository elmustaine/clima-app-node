const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);
    console.log(encodedUrl);
    //console.log(argv.direccion);
    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedUrl}?json=1`,
        timeout: 3000
    });

    const resp = await instance.get()
    if (resp.data.alt.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.alt.loc;
    const direcciond = data.city;
    const lat = data.latt;
    const lng = data.longt;

    //return data;
    return {
        direcciond,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
};