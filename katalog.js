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
    { id: 'bakso',       grup: 'Makanan', nama: 'Bakso',          emoji: '🍲', foto: [],             tone: '#FFE3D3' },
    { id: 'mie-ayam',    grup: 'Makanan', nama: 'Mie Ayam',       emoji: '🍜', foto: [],       tone: '#FFF0C2' },
    { id: 'sate',        grup: 'Makanan', nama: 'Sate',           emoji: '🍢', foto: [],               tone: '#FFE3D3' },
    { id: 'soto',        grup: 'Makanan', nama: 'Soto',           emoji: '🥣', foto: [],               tone: '#FFF0C2' },
    { id: 'martabak',    grup: 'Makanan', nama: 'Martabak',       emoji: '🥞', foto: [],       tone: '#E9E3FF' },
    { id: 'cilok',       grup: 'Makanan', nama: 'Cilok',          emoji: '🍡', foto: [],             tone: '#FFF0C2' },
    { id: 'gorengan',    grup: 'Makanan', nama: 'Gorengan',       emoji: '🍤', foto: [],       tone: '#FFE3D3' },
    { id: 'rujak',       grup: 'Makanan', nama: 'Rujak',          emoji: '🥗', foto: [],             tone: '#D9F5E6' },
    { id: 'camilan',     grup: 'Makanan', nama: 'Makanan Ringan', emoji: '🍿', foto: [],         tone: '#E9E3FF' },
    // Minuman
    { id: 'minuman',     grup: 'Minuman', nama: 'Susu & Minuman', emoji: '🥛', foto: [],         tone: '#DCE8FF' },
    { id: 'kopi',        grup: 'Minuman', nama: 'Kopi',           emoji: '☕', foto: [],               tone: '#EEF0F3' },
    { id: 'jus-buah',    grup: 'Minuman', nama: 'Jus Buah',       emoji: '🧃', foto: [],       tone: '#D9F5E6' },
    { id: 'es-campur',   grup: 'Minuman', nama: 'Es Campur & Es Degan', emoji: '🍧', foto: [], tone: '#DCE8FF' },
    // Belanja & kebutuhan
    { id: 'oleh-oleh',   grup: 'Belanja & Kebutuhan', nama: 'Oleh-oleh UMKM', emoji: '🛍️', foto: ['img/umkm.jpg', 'img/tape.jpg'],             tone: '#D9F5E6', layanan: 'umkm' },
    { id: 'sembako',     grup: 'Belanja & Kebutuhan', nama: 'Sembako',        emoji: '🍚', foto: [],       tone: '#FFF0C2', layanan: 'lain' },
    { id: 'sayur-buah',  grup: 'Belanja & Kebutuhan', nama: 'Sayur & Buah',   emoji: '🥬', foto: [], tone: '#D9F5E6', layanan: 'lain' },
    { id: 'galon-gas',   grup: 'Belanja & Kebutuhan', nama: 'Galon & Gas',    emoji: '💧', foto: [],   tone: '#DCE8FF', layanan: 'lain' },
    { id: 'obat',        grup: 'Belanja & Kebutuhan', nama: 'Obat & Apotek',  emoji: '💊', foto: [],             tone: '#EEF0F3', layanan: 'lain' }
  ],

  // Toko cadangan. kategori: satu atau lebih id kategori di atas.
  // menu: dikelompokkan per bagian; produk berisi nama, harga, dan bila perlu
  // varian (teks kecil di samping nama), ket (keterangan), habis: true.
  // katalog (opsional): link katalog WhatsApp toko, misalnya 'https://wa.me/c/628...'.
  //   Tampil sebagai tombol "Lihat menu & foto di WhatsApp"; menu boleh kosong.
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

// =====================================================================
//  FUNGSI BANTU (dipakai index.html dan admin.html, jangan diubah)
//
//  Link katalog WhatsApp yang ditempel penjual dipakai sebagai tautan di
//  situs, jadi hanya alamat resmi WhatsApp yang diterima. Hasilnya adalah
//  alamat https yang sudah dirapikan, atau '' bila tidak valid.
//  Contoh valid: https://wa.me/p/123/456, wa.me/c/62812..., api.whatsapp.com/...
// =====================================================================
window.linkKatalogWA = function (raw) {
  var s = String(raw == null ? '' : raw).trim();
  if (!s) return '';
  if (!/^[a-z][a-z0-9+.-]*:/i.test(s)) s = 'https://' + s;
  try {
    var u = new URL(s);
    if (u.protocol === 'http:') u.protocol = 'https:';
    if (u.protocol !== 'https:' || u.username || u.password || u.port) return '';
    var ok = ['wa.me', 'api.whatsapp.com', 'whatsapp.com', 'www.whatsapp.com', 'business.whatsapp.com'];
    if (ok.indexOf(u.hostname.toLowerCase()) < 0) return '';
    return u.href;
  } catch (e) { return ''; }
};
