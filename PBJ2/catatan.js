// //a. import core module node.js
 const fs = require('fs')
// fs.writeFileSync('catatan.txt', 'Nama Saya Mauliza Aprilia\n')
// fs.appendFileSync('catatan.txt', 'Saya tinggal di Sago')


const chalk = require('chalk');

// Mengambil catatan dasar
const ambilCatatan = function () {
    return 'Ini Catatan Mauliza Aprilia ...';
};

// Menambahkan catatan baru
const tambahCatatan = function (judul, isi) {
    const catatan = muatCatatan(); // Memuat catatan yang ada
    const catatanGanda = catatan.filter(function (note) {
        return note.judul === judul; // Pastikan membandingkan judul
    });

    // Jika catatan dengan judul yang sama tidak ada
    if (catatanGanda.length === 0) {
        catatan.push({
            judul: judul,
            isi: isi
        });
        simpanCatatan(catatan); // Simpan catatan yang baru
        console.log('Catatan baru ditambahkan!');
    } else {
        console.log('Judul catatan telah dipakai');
    }
};

// Menghapus catatan berdasarkan judul
const hapusCatatan = function (judul) {
    const catatan = muatCatatan(); // Memuat catatan yang ada
    const catatanUntukDisimpan = catatan.filter(function (note) {
        return note.judul !== judul; // Menghapus catatan yang judulnya sama
    });

    if (catatan.length > catatanUntukDisimpan.length) {
        console.log(chalk.green.inverse('Catatan dihapus!'));
        simpanCatatan(catatanUntukDisimpan); // Simpan catatan yang tersisa
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'));
    }
};

// Menyimpan catatan ke file
const simpanCatatan = function (catatan) { 
    const dataJSON = JSON.stringify(catatan); 
    fs.writeFileSync('catatan.json', dataJSON); 
};

// Memuat catatan dari file
const muatCatatan = function () { 
    try { 
        const dataBuffer = fs.readFileSync('catatan.json'); 
        const dataJSON = dataBuffer.toString(); 
        return JSON.parse(dataJSON); 
    } catch (e) { 
        return []; // Mengembalikan array kosong jika file tidak ditemukan
    } 
};

// Menampilkan semua catatan
const listCatatan = function () {
    const catatan = muatCatatan(); // Memuat catatan
    if (catatan.length > 0) {
        console.log('Daftar Catatan:');
        catatan.forEach((note, index) => {
            console.log(`${index + 1}. Judul: ${note.judul}, Isi: ${note.isi}`);
        });
    } else {
        console.log('Tidak ada catatan yang ditemukan.');
    }
};

// Membaca catatan berdasarkan judul
const readCatatan = function (judul) {
    const catatan = muatCatatan(); // Memuat catatan
    const catatanDitemukan = catatan.find(function (note) {
        return note.judul === judul; // Mencari catatan dengan judul yang diberikan
    });

    if (catatanDitemukan) {
        console.log('Catatan Ditemukan:');
        console.log(`Judul: ${catatanDitemukan.judul}`);
        console.log(`Isi: ${catatanDitemukan.isi}`);
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'));
    }
};

// Ekspor fungsi
module.exports = { 
    ambilCatatan, 
    tambahCatatan,
    hapusCatatan, 
    listCatatan,
    muatCatatan,
    readCatatan// Tambahkan fungsi bacaCatatan ke ekspor
};
