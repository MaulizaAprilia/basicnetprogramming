const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=a148952ebda0f7ea1370d2fa5751bc84&query=-0.8984902300564448,100.35045819969267'
request({ url: url }, (error, response) => {
//console.log(response)
const data = JSON.parse(response.body)
//console.log(data)
//console.log(data.current)
//console.log(data.current.temperature)
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Universitas Negeri Padang.json?access_token=pk.eyJ1IjoibWF1bGl6YWFwcmxhIiwiYSI6ImNtMWtoZWVvNjA5eDYyaW9wdWx5NXNkOXEifQ.W8RgS540BQZg_zeYw20LxQ&limit=2';

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        return console.log('Unable to connect to geolocation service!');
    } else if (response.body.features.length === 0) {
        return console.log('No location found. Try another search.');
    }
    
    const latitude1 = response.body.features[0].center[1];
    const longitude1 = response.body.features[0].center[0];

    const latitude2 = response.body.features[1].center[1];
    const longitude2 = response.body.features[1].center[0];

    console.log('\nFirst location:', latitude1, longitude1);
    console.log('Second location:', latitude2, longitude2);


    const weatherURL1 = `http://api.weatherstack.com/current?access_key=a148952ebda0f7ea1370d2fa5751bc84&query=${latitude1},${longitude1}`; 

    request({ url: weatherURL1, json: true }, (error, response) => {
        if (error) {
            return console.log('Unable to connect to weather service!');
        } else if (response.body.error) {
            return console.log('Unable to find location.');
        }
        console.log('\nFirst location: ');
        console.log(`Koordinat lokasi anda adalah: ${latitude1}, ${longitude1}`);
        console.log(`data yang anda cari adalah: ` + response.body.location.name);
        console.log('Data yang ditemukan adalah: ' + response.body.location.name + ', ' + response.body.location.region + ', ' + response.body.location.country);
        console.log(`tipe lokasi adalah: `+response.body.request.type);
        console.log('Saat ini suhu di FirstLocation mencapai '+ response.body.current.temperature + ' derajat celcius.' + ' Kemungkinan terjadinya hujan adalah', response.body.current.precip + '%');
    });

    const weatherURL2 = `http://api.weatherstack.com/current?access_key=a148952ebda0f7ea1370d2fa5751bc84&query=${latitude2},${longitude2}`;
    
    request({ url: weatherURL2, json: true }, (error, response) => {
        if (error) {
            return console.log('Unable to connect to weather service!');
        } else if (response.body.error) {
            return console.log('Unable to find location.');
        }
        console.log('\nSecond location :');
        console.log(`Koordinat lokasi anda adalah: ${latitude2}, ${longitude2}`);
        console.log(`data yang anda cari adalah : ` + response.body.location.name);
        console.log('Data yang ditemukan adalah: ' + response.body.location.name + ', ' + response.body.location.region + ', ' + response.body.location.country);
        console.log(`tipe lokasi adalah: ` +response.body.request.type);     
        console.log('Saat ini suhu di SecondLocation mencapai '  + response.body.current.temperature + ' derajat celcius.' + ' Kemungkinan terjadinya hujan adalah', response.body.current.precip + '%');
    });
});