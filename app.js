// const axios = require('axios').default;;
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion de la ciudad del mundo'
    }
}).argv;

// clima.getClima(35, 139)
//     .then(cli => {
//         let clima = cli.clim.data;
//         let climaa = cli.clim.data;
//         console.log(cli.clim.data.main.temp)
//     })
//     .catch(err => console.log(err))


// esta forma no es la mejor

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         let base = resp;
//         console.log(base);
// console.log('Nombre: ', base.title);
// console.log('Pais: ', base.address.countryName);
// console.log('Position lat: ', base.position.lat);
// console.log('Position lon: ', base.position.lng);
// clima.getClima(4.61496, -74.06941)
//     .then(cli => {
//         // let clima = cli.clim.data;
//         console.log(cli);

//         console.log(`Temperatura Actual ${cli}ºC `)
//     })
//     .catch(err => console.log(err))
// })
// .catch(err => {
//     console.log(err);
// })

//fin de esta forma no es la mejor


let getInfo = async(direccion) => {
    try {
        let cord = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(cord.lat, cord.lng);
        return `El Clima en ${cord.lugar} es de ${temp} ºC`;

    } catch (error) {
        return `No se pudo determinar el clima para ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(err => console.log(err))

// console.log(argv.direccion);

// let escaparUrL = encodeURI(argv.direccion);
// // Make a request for a user with a given ID
// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${escaparUrL}&key=AIzaSyBuLbdfX1ls2npzdjfKe_4NzS_IcCyYb0M`)
//     .then((resp) => {
//         console.log(JSON.stringify(resp.data, undefined, 2))
//             // console.log(response.status)
//         let location = resp.data.results[0].formatted_address;
//         let lat = resp.data.results[0].geometry.location.lat;
//         let lon = resp.data.results[0].geometry.location.lng;
//         console.log('Direccion', location);
//         console.log('latitud', lat);
//         console.log('longitud', lon);
//     })
//     .catch((error) => console.log('Error!!! ', error))
//     .then(function() {
//         // always executed
//     });