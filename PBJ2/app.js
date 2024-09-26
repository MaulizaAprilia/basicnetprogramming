// //A. NODE.JS MODULE SYSTEM
//    //a. import core module node.js
//     const fs = require('fs')
//     //fs.writeFileSync('catatan.txt', 'Nama Saya Mauliza Aprilia\n')
//     fs.appendFileSync('catatan.txt', 'Saya tinggal di Sago')


//     //b. import file pada node.js
const catatan = require('./catatan.js')
//     //const pesan1 = catatan()
//    // console.log(pesan1)

//     //c. import npm (Node Package Manager) pada node.js
//     const validator = require('validator')
//     //const ambilCatatan = require('./catatan.js')
//     //const pesan2 = ambilCatatan()
//     //console.log(pesan2)
//     console.log(validator.isURL('https://mauliza.com'))

//B. COMMAND LINES ARGUMENTS
    //a.mendapatkan input dari pengguna
    
    // const ambilCatatan = require('./catatan.js')

    // const command = process.argv[2]
    // console.log(process.argv)
    // console.log(process.argv[2])

    // if (command === 'tambah') {
    //     console.log('Tambah Catatan') 
    // } else if (command === 'hapus') {
    //     console.log('Hapus Catatan') 
    // }


     //b. Argument Parsing (Penguraian Argumen)
     const yargs = require('yargs')
    // harusnya ada code const catatan, tapi ini sudah di deklarasikan 
    //pada baris 9, dan tidak boleh ada deklarasi variabel ganda dalam satu cakupan
     //Kustomisasi versi yargs
     yargs.version('10.1.0')

     //Membuat perintah (command) 'tambah'
     yargs.command({
        command: 'tambah',
        describe: 'Tambah sebuah catatan baru',
        builder: {
            judul: {
                describe: 'Judul catatan',
                demandOption: true, 
                type: 'string' 
            },
            isi: {
                describe: 'Isi catatan',
                demandOption: true, 
                type: 'string' 
            }
        },
        handler: function (argv) {
            catatan.tambahCatatan(argv.judul, argv.isi); // Panggil fungsi tambahCatatan
        }
    });
     //Perintah hapus
     yargs.command({
        command: 'hapus',
        describe: 'hapus catatan',
        builder: {
            judul: {
                describe: 'Judul catatan',
                demandOption: true, 
                type: 'string' 
            }
            },
            handler(argv) {
                catatan.hapusCatatan(argv.judul);
            }
        });

     //Instruksi no.4 letakan disini
     //command untuk menampilkan semua catatan
    // Menampilkan semua catatan
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua catatan',
    handler() {
        const allNotes = catatan.muatCatatan(); // Memuat catatan
        if (allNotes.length > 0) {
            console.log('Daftar Catatan:');
            allNotes.forEach((note, index) => {
                console.log(`${index + 1}. Judul: ${note.judul}, Isi: ${note.isi}`);
            });
        } else {
            console.log('Tidak ada catatan yang ditemukan.');
        }
    }
});

     yargs.command({
        command: 'read',
        describe: 'Membaca sebuah catatan',
        builder: {
            judul: {
                describe: 'Judul catatan yang ingin dibaca',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv)   {
            catatan.readCatatan(argv.judul); // Memanggil fungsi readCatatan
            // implementasi untuk membaca catatan berdasarkan judul
        }
     })

     //letakkan bagian ini pada baris terakhir 
     console.log(yargs.argv)
     yargs.parse()