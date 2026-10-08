// Isi dengan config web app dari Firebase Console:
// Project settings > General > Your apps > Web app > SDK setup and configuration.
// Nilai ini boleh publik; keamanan diatur oleh firestore.rules dan storage.rules.
export const firebaseConfig = {
  apiKey: 'AIzaSyDF49xjGl5QG_QE41l2B8AhP5seAx8yJbE',
  authDomain: 'local-trans-2115d.firebaseapp.com',
  projectId: 'local-trans-2115d',
  storageBucket: 'local-trans-2115d.firebasestorage.app',
  messagingSenderId: '561134482116',
  appId: '1:561134482116:web:0992ecd452dd8096ac0f91'
};

export const SDK = 'https://www.gstatic.com/firebasejs/10.12.2';
export const isConfigured = () => !!firebaseConfig.projectId;

// false = gambar dipakai lewat alamat (img/xxx.jpg atau URL), tanpa Firebase Storage.
// Ubah ke true setelah Storage aktif untuk upload gambar dari admin.
export const useStorage = false;
