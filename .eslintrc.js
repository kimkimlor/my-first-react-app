module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'no-unused-vars': ['warn', { 'varsIgnorePattern': '^React$' }],
    'react/react-in-jsx-scope': 'off' // Nonaktifkan jika Anda tidak menggunakan React dalam JSX
  },
  settings: {
    react: {
      version: 'detect', // Deteksi versi React secara otomatis
    },
  },
};
