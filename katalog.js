// =====================================================================
//  KATEGORI & TOKO CONTOH — Local Trans Tanggul
//
//  Kategori (dan foto contohnya) diatur di file ini oleh pemilik website.
//  Foto disimpan di folder img/ repo ini, jadi tidak perlu Firebase Storage.
//
//  Toko & menu diisi driver lewat admin.html (tersimpan di Firestore),
//  cukup teks tanpa foto. Daftar `toko` di bawah hanya cadangan: tampil
//  bila Firestore belum berisi toko, dan bisa diimpor dari admin.html.
//
//  id kategori & toko: huruf kecil, tanpa spasi (pakai tanda -).
//  id dipakai di link, misalnya: .../#/k/cilok atau .../#/t/fides-jagoan-steak
//  harga: angka saja tanpa titik, contoh 18000. Isi 0 untuk "Tanya harga".
// =====================================================================

window.KATALOG = {

  // Kategori utama di beranda.
  // foto : 1–2 gambar contoh di folder img/: foto JPG (4:3, sekitar 800×600, di bawah
  //        100 KB) atau ilustrasi SVG. Gambar pertama tampil di kartu beranda.
  //        Kosongkan (foto: []) kalau belum ada, nanti tampil emoji.
  // tone : warna latar di belakang foto / emoji.
  // grup : judul kelompok di beranda (Makanan, Minuman, Belanja & Kebutuhan).
  // layanan (opsional): layanan yang dibuka tombol "Titip beli" saat kategori belum
  //        punya toko. Default 'makanan'; 'umkm' untuk produk UMKM, 'lain' untuk
  //        kebutuhan lain (sembako, galon, obat).
  kategori: [
    // Makanan
    { id: 'kuliner',     grup: 'Makanan', nama: 'Kuliner',        emoji: '🍛', foto: ['img/makanan.jpg', 'img/kuliner-2.svg'],        tone: '#FFF0C2' },
    { id: 'nasi-goreng', grup: 'Makanan', nama: 'Nasi Goreng',    emoji: '🍳', foto: ['img/nasi-goreng.svg', 'img/nasi-goreng-2.svg'], tone: '#FFE3D3' },
    { id: 'bakso',       grup: 'Makanan', nama: 'Bakso',          emoji: '🍲', foto: ['img/bakso.svg', 'img/bakso-2.svg'],             tone: '#FFE3D3' },
    { id: 'mie-ayam',    grup: 'Makanan', nama: 'Mie Ayam',       emoji: '🍜', foto: ['img/mie-ayam.svg', 'img/mie-ayam-2.svg'],       tone: '#FFF0C2' },
    { id: 'sate',        grup: 'Makanan', nama: 'Sate',           emoji: '🍢', foto: ['img/sate.svg', 'img/sate-2.svg'],               tone: '#FFE3D3' },
    { id: 'soto',        grup: 'Makanan', nama: 'Soto',           emoji: '🥣', foto: ['img/soto.svg', 'img/soto-2.svg'],               tone: '#FFF0C2' },
    { id: 'martabak',    grup: 'Makanan', nama: 'Martabak',       emoji: '🥞', foto: ['img/martabak.svg', 'img/martabak-2.svg'],       tone: '#E9E3FF' },
    { id: 'cilok',       grup: 'Makanan', nama: 'Cilok',          emoji: '🍡', foto: ['img/cilok.svg', 'img/cilok-2.svg'],             tone: '#FFF0C2' },
    { id: 'gorengan',    grup: 'Makanan', nama: 'Gorengan',       emoji: '🍤', foto: ['img/gorengan.svg', 'img/gorengan-2.svg'],       tone: '#FFE3D3' },
    { id: 'rujak',       grup: 'Makanan', nama: 'Rujak',          emoji: '🥗', foto: ['img/rujak.svg', 'img/rujak-2.svg'],             tone: '#D9F5E6' },
    { id: 'camilan',     grup: 'Makanan', nama: 'Makanan Ringan', emoji: '🍿', foto: ['img/camilan.svg', 'img/camilan-2.svg'],         tone: '#E9E3FF' },
    // Minuman
    { id: 'minuman',     grup: 'Minuman', nama: 'Susu & Minuman', emoji: '🥛', foto: ['img/minuman.svg', 'img/minuman-2.svg'],         tone: '#DCE8FF' },
    { id: 'kopi',        grup: 'Minuman', nama: 'Kopi',           emoji: '☕', foto: ['img/kopi.svg', 'img/kopi-2.svg'],               tone: '#EEF0F3' },
    { id: 'jus-buah',    grup: 'Minuman', nama: 'Jus Buah',       emoji: '🧃', foto: ['img/jus-buah.svg', 'img/jus-buah-2.svg'],       tone: '#D9F5E6' },
    { id: 'es-campur',   grup: 'Minuman', nama: 'Es Campur & Es Degan', emoji: '🍧', foto: ['img/es-campur.svg', 'img/es-campur-2.svg'], tone: '#DCE8FF' },
    // Belanja & kebutuhan
    { id: 'oleh-oleh',   grup: 'Belanja & Kebutuhan', nama: 'Oleh-oleh UMKM', emoji: '🛍️', foto: ['img/umkm.jpg', 'img/tape.jpg'],             tone: '#D9F5E6', layanan: 'umkm' },
    { id: 'sembako',     grup: 'Belanja & Kebutuhan', nama: 'Sembako',        emoji: '🍚', foto: ['img/sembako.svg', 'img/sembako-2.svg'],       tone: '#FFF0C2', layanan: 'lain' },
    { id: 'sayur-buah',  grup: 'Belanja & Kebutuhan', nama: 'Sayur & Buah',   emoji: '🥬', foto: ['img/sayur-buah.svg', 'img/sayur-buah-2.svg'], tone: '#D9F5E6', layanan: 'lain' },
    { id: 'galon-gas',   grup: 'Belanja & Kebutuhan', nama: 'Galon & Gas',    emoji: '💧', foto: ['img/galon-gas.svg', 'img/galon-gas-2.svg'],   tone: '#DCE8FF', layanan: 'lain' },
    { id: 'obat',        grup: 'Belanja & Kebutuhan', nama: 'Obat & Apotek',  emoji: '💊', foto: ['img/obat.svg', 'img/obat-2.svg'],             tone: '#EEF0F3', layanan: 'lain' }
  ],

  // Toko cadangan. kategori: satu atau lebih id kategori di atas.
  // menu: dikelompokkan per bagian; produk berisi nama, harga, dan bila perlu
  // varian (teks kecil di samping nama), ket (keterangan), habis: true.
  toko: [
    {
      id: 'fides-jagoan-steak',
      nama: 'Fides Jagoan Steak',
      kategori: ['kuliner'],
      ket: 'Steak, lalapan, camilan, dan aneka es.',
      menu: [
        { bagian: 'Aneka Steak', ket: 'Pilihan saus: BBQ, Mushroom, Spicy.', produk: [
          { nama: 'Chicken Steak', harga: 18000 },
          { nama: 'Jumbo Chicken Steak', harga: 28000 },
          { nama: 'Chicken Steak Komplit', varian: 'mini', harga: 25000 },
          { nama: 'Chicken Steak Komplit', varian: 'jumbo', harga: 35000 },
          { nama: 'Crispy Chicken Steak', harga: 13000 },
          { nama: 'Crispy Udang Steak', harga: 16000 },
          { nama: 'Party Platter Chicken Steak', ket: 'Bisa untuk 4–6 orang, free Es Teh 3 cup.', harga: 150000 },
          { nama: 'Tambah Saus / Sambal', harga: 3000 }
        ] },
        { bagian: 'Aneka Lalapan', produk: [
          { nama: 'Ayam Crispy Geprek', varian: 'tanpa nasi', harga: 10000 },
          { nama: 'Ayam Crispy Geprek', varian: 'pakai nasi', harga: 13000 },
          { nama: 'Lalapan Ayam Kampung', varian: 'tanpa nasi', harga: 27000 },
          { nama: 'Lalapan Ayam Kampung', varian: 'pakai nasi', harga: 30000 },
          { nama: 'Lalapan Ayam Goreng Lengkuas', varian: 'tanpa nasi', harga: 13000 },
          { nama: 'Lalapan Ayam Goreng Lengkuas', varian: 'pakai nasi', harga: 16000 },
          { nama: 'Lalapan Udang Crispy', varian: 'tanpa nasi', harga: 13000 },
          { nama: 'Lalapan Udang Crispy', varian: 'pakai nasi', harga: 16000 }
        ] },
        { bagian: 'Camilan', produk: [
          { nama: 'Kentang Goreng', ket: 'Pilihan bumbu: jagung bakar, balado, pedas manis, BBQ, mix.', harga: 11000 },
          { nama: 'Tahu Crispy', ket: 'Pilihan bumbu: jagung bakar, balado, pedas manis, BBQ, mix.', harga: 10000 },
          { nama: 'Sosis Bakar', harga: 10000 },
          { nama: 'Tahu Pentol Jamur', harga: 10000 },
          { nama: 'Tempe Mendoan', harga: 10000 },
          { nama: 'Nasi Putih', harga: 4000 },
          { nama: 'Telur', harga: 5000 }
        ] },
        { bagian: 'Minuman Spesial', produk: [
          { nama: 'Es Tejo', varian: 'ori', harga: 5000 },
          { nama: 'Es Tejo', varian: 'susu', harga: 10000 },
          { nama: 'Es J-Kult', harga: 8000 },
          { nama: 'Es Milo Chocolate', harga: 10000 },
          { nama: 'Es Soda Gembira', harga: 10000 },
          { nama: 'Es Joshua', harga: 7000 },
          { nama: 'Es Mojito', harga: 7000 }
        ] },
        { bagian: 'Minuman', produk: [
          { nama: 'Teh', varian: 'es / hangat', harga: 4000 },
          { nama: 'Jeruk', varian: 'es / hangat', harga: 5000 },
          { nama: 'Es Lemon Tea', harga: 6000 },
          { nama: 'Es Lemon Mint', harga: 6000 },
          { nama: 'Kopi Hitam', harga: 5000 },
          { nama: 'Air Mineral', harga: 3000 }
        ] }
      ]
    }
  ]
};
