
// Mengimpor express
const express = require('express')

// Membuat instance express
const app = express();
const hbs = require('hbs')


//ini halaman utama 
app.get('', (req, res) => { 
  res.render('index', { 
      judul: 'Aplikasi Cek Cuaca', 
      teksCuaca: 'Aplikasi ini digunakan untuk mengecek Cuaca!',
      nama: 'Mauliza Aprilia' 
  }) 
})

//ini halaman bantuan
app.get('/bantuan', (req, res) => { 
  res.render('bantuan', { 
  judul: 'Bantuan', 
  teksBantuan: 'ini adalah teks bantuan',
  nama: 'Mauliza Aprilia' 
  }) 
  }) 

// Route untuk halaman infoCuaca
app.get('/infoCuaca', (req, res) => {
  res.send([{ 
    prediksiCuaca: 'Cuaca Sedang Hujan', 
    lokasi: 'Padang' 
    }]) 
});

//ini halaman tentang 
app.get('/tentang.html', (req, res) => { 
  res.render('tentang', { 
  judul: 'Tentang Saya', 
  nama: 'Mauliza Aprilia' 
  }) 
  }) 

//mendefinisikan jalur/path untuk konfigurasi Express
const path = require('path');
const direktoriPublic = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')

//setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs') 
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)

// setup direktori statis
app.use(express.static(direktoriPublic));

app.get('/bantuan/*', (req, res) => {
  res.render('404', {
    judul: '404',
    nama: 'Mauliza Aprilia',
    pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    judul: '404',
    nama: 'Mauliza Aprilia',
    pesanKesalahan: 'Halaman tidak ditemukan.'
  })
})

// Menjalankan server pada port 4000
app.listen(4000, () => {
  console.log('Server berjalan pada port 4000');
});

