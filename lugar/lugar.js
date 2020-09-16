const axios = require('axios').default;


const getLugarLatLng = async(direccion) => {
    let escaparUrL = encodeURI(direccion);
    // Make a request for a user with a given ID
    let resp = await axios.get(`https://geocode.search.hereapi.com/v1/geocode?q=${escaparUrL}&apiKey=Fw5om96psKd05Aiu_oM8BzHEqwhfRbBQoUneCyTwzPY`)
        // return resp.data.items[0];
    if (resp.data.items[0] === undefined) {
        throw new Error(`No hay resultados para la direccion ${direccion}`)
    }

    // if (resp.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay resultados para la direccion ${direccion}`)
    // }
    let location = resp.data.items[0].position;
    let lugar = resp.data.items[0].title;
    // let lat = resp.data.results[0].geometry.location.lat;
    // let lon = resp.data.results[0].geometry.location.lng;
    // console.log('Direccion', location);
    // console.log('latitud', lat);
    // console.log('longitud', lon);
    return {
        lugar,
        lat: location.lat,
        lng: location.lng
    }

}

module.exports = {
        getLugarLatLng
    }
    /*
    {
        "items": [
            {
                "title": "Bogotá, D.C., Colombia",
                "id": "here:cm:namedplace:23656398",
                "resultType": "locality",
                "localityType": "city",
                "address": {
                    "label": "Bogotá, D.C., Colombia",
                    "countryCode": "COL",
                    "countryName": "Colombia",
                    "countyCode": "DC",
                    "county": "Bogotá, D.C.",
                    "city": "Bogotá, D.C.",
                    "postalCode": "110311"
                },
                "position": {
                    "lat": 4.61496,
                    "lng": -74.06941
                },
                "mapView": {
                    "west": -74.44792,
                    "south": 3.73489,
                    "east": -73.98653,
                    "north": 4.837
                },
                "scoring": {
                    "queryScore": 1.0,
                    "fieldScore": {
                        "city": 1.0
                    }
                }
            }
        ]
    }*/