//a. import core module node.js
const fs = require('fs')
//fs.writeFileSync('catatan.txt', 'Nama Saya Mauliza Aprilia\n')
fs.appendFileSync('catatan.txt', 'Saya tinggal di Sago')


//b. import file pada node.js
const catatan = require('./catatan.js')
const pesan1 = catatan()
console.log(pesan1)

//c. import npm (Node Package Manager) pada node.js
const validator = require('validator')
const ambilCatatan = require('./catatan.js')
const pesan2 = ambilCatatan()
console.log(pesan2)
console.log(validator.isURL('https://mauliza.com'))
