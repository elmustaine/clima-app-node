const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direcciond} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${coords.direcciond}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);