SystemJS.config({
  baseURL:'',
  defaultExtension: true,
  packages: {
    ".": {
      main: './index.js',
      defaultExtension: 'js'
    }
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': {
      loader: 'css'
    }
  },
  map: {
    'plugin-babel': '../node_modules/babel/plugin-babel.js',
    'systemjs-babel-build': '../node_modules/systemjs/systemjs-babel-browser.js',
    'react': '../node_modules/react/react.production.min.js',
    'react-dom': '../node_modules/react-dom/react-dom.production.min.js',
    'react-router-dom': '../node_modules/react-router-dom/react-router-dom.min.js',
    'css': '../node_modules/css/css.js',
    'material-ui/core': '../node_modules/material-ui/material-ui.production.min.js',
    'firebase': '../node_modules/firebase/firebase.min.js',
    'react-markdown': '../node_modules/react-markdown/react-markdown.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('../src/index.js')
  .catch(console.error.bind(console));
