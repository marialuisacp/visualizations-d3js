/*
 *  D3 Basics - Aprendendo D3.js
 *  ----------------
 *  Maria Luisa Costa Pinto
 *  http://malu.dev
 *
 *  Funcoes gerais do projeto
 *
 */

const showSourceCode = (fileName) => {
	let code = '';
		
	d3.text('../../../config.js').then(function(conf) {
	  // code += conf;
	  d3.text(fileName).then(function(text) {
	    document.getElementById('code').innerHTML = code + conf + '\n\n' + text;
	    hljs.initHighlighting();
	  });
	});
};
