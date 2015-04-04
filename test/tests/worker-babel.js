importScripts('../../dist/system.src.js');

System.baseURL = '../';
System.paths['babel'] = '../node_modules/babel-core/browser.js';

System.transpiler = 'babel';

System.import('tests/es6-and-amd.js').then(function(m) {
  postMessage({
    amd: m.amd_module,
    es6: m.es6_module
  });
}, function(err) {
  console.error(err);
});
