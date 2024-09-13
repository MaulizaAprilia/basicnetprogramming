//a. import core module node.js
const fs = require('fs')
//fs.writeFileSync('catatan.txt', 'Nama Saya Mauliza Aprilia')
fs.appendFileSync('catatan.txt', 'Saya tinggal di Sago')


//b. import file pada node.js
const catatan = require('./catatan.js')
const pesan = catatan()
console.log(pesan)



//c. import npm (Node Package Manager) pada node.js
const validator = require('validator')
const ambilCatatan = require('./catatan.js')

console.log(pesan)
console.log(validator.isURL('https://mauliza.com'))

