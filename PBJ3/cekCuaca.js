const request = require('postman-request');
const urlCuaca = 
`http://api.weatherstack.com/current?access_key=a148952ebda0f7ea1370d2fa5751bc84&query=-0.8984902300564448,100.35045819969267&units=m`;

request({ url: urlCuaca, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log('Unable to find location.');
    } else {
        console.log('Saat ini suhu diluar mencapai ' + 
            response.body.current.temperature + 
            ' derajat celcius. Kemungkinan terjadinya hujan adalah ' +
            response.body.current.precip + 
            '%');

        // Menampilkan deskripsi cuaca dari weather_descriptions array
        console.log('Deskripsi cuaca: ' + response.body.current.weather_descriptions[0]);
    }
});