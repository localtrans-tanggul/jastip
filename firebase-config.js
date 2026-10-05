// Isi dengan config web app dari Firebase Console:
// Project settings > General > Your apps > Web app > SDK setup and configuration.
// Nilai ini boleh publik; keamanan diatur oleh firestore.rules dan storage.rules.
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

export const SDK = 'https://www.gstatic.com/firebasejs/10.12.2';
export const isConfigured = () => !!firebaseConfig.projectId;
