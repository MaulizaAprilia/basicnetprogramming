const fs = require('fs')
//fs.writeFileSync('catatan.txt', 'Nama Saya Mauliza Aprilia')
fs.appendFileSync('catatan.txt', 'Saya tinggal di Sago') 


const catatan = require('./catatan.js')
const pesan = catatan()
console.log(pesan)