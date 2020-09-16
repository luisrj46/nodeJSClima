const axios = require('axios').default;


const getClima = async(lat, lon) => {
    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ff11a62de2f4e75f4972e2d2ebb13e1f`)
    return clima.data.main.temp

}

module.exports = {
    getClima
}

// {
//     clim: {
//         status: 200,
//         statusText: 'OK',
//         headers: {
//             server: 'openresty',
//             date: 'Wed, 16 Sep 2020 00:18:19 GMT',
//             'content-type': 'application/json; charset=utf-8',
//             'content-length': '505',
//             connection: 'close',
//             'x-cache-key': '/data/2.5/weather?lat=35&lon=139&units=metric',
//             'access-control-allow-origin': '*',
//             'access-control-allow-credentials': 'true',
//             'access-control-allow-methods': 'GET, POST'
//         },
//         config: {
//             adapter: [Function: httpAdapter],
//             transformRequest: [Object],
//             transformResponse: [Object],
//             timeout: 0,
//             xsrfCookieName: 'XSRF-TOKEN',
//             xsrfHeaderName: 'X-XSRF-TOKEN',
//             maxContentLength: -1,
//             validateStatus: [Function: validateStatus],
//             headers: [Object],
//             method: 'get',
//             url: 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=ff11a62de2f4e75f49
//             72e2 d2ebb13e1f ',
//             data: undefined
//         },
//         request: ClientRequest {
//             _events: [Object: null prototype],
//             _eventsCount: 7,
//             _maxListeners: undefined,
//             outputData: [],
//             outputSize: 0,
//             writable: true,
//             _last: true,
//             chunkedEncoding: false,
//             shouldKeepAlive: false,
//             useChunkedEncodingByDefault: false,
//             sendDate: false,
//             _removedConnection: false,
//             _removedContLen: false,
//             _removedTE: false,
//             _contentLength: 0,
//             _hasBody: true,
//             _trailer: '',
//             finished: true,
//             _headerSent: true,
//             socket: [TLSSocket],
//             connection: [TLSSocket],
//             _header: 'GET /data/2.5/weather?lat=35&lon=139&units=metric&appid=ff11a62de2f4e75f4972e2d2ebb13e1f HTTP/1.
//             1\ r\ n ' +
//             'Accept: application/json, text/plain, */*\r\n' +
//             'User-Agent: axios/0.18.0\r\n' +
//             'Host: api.openweathermap.org\r\n' +
//             'Connection: close\r\n' +
//             '\r\n',
//             _onPendingData: [Function: noopPendingOutput],
//             agent: [Agent],
//             socketPath: undefined,
//             method: 'GET',
//             insecureHTTPParser: undefined,
//             path: '/data/2.5/weather?lat=35&lon=139&units=metric&appid=ff11a62de2f4e75f4972e2d2ebb13e1f',
//             _ended: true,
//             res: [IncomingMessage],
//             aborted: false,
//             timeoutCb: null,
//             upgradeOrConnect: false,
//             parser: null,
//             maxHeadersCount: null,
//             reusedSocket: false,
//             _redirectable: [Writable],
//             [Symbol(kCapture)]: false,
//             [Symbol(kNeedDrain)]: false,
//             [Symbol(corked)]: 0,
//             [Symbol(kOutHeaders)]: [Object: null prototype]
//         },
//         data: {
//             coord: [Object],
//             weather: [Array],
//             base: 'stations',
//             main: [Object],
//             visibility: 800,
//             wind: [Object],
//             clouds: [Object],
//             dt: 1600215332,
//             sys: [Object],
//             timezone: 32400,
//             id: 1851632,
//             name: 'Shuzenji',
//             cod: 200
//         }
//     }