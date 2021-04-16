const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './build',
		historyApiFallback: true,
		watchOptions: { aggregateTimeout: 300, poll: 1000 },
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
		proxy: {
			'/app-encabezado': {
				target: 'http://localhost:8081'
			},
			'/app-desempenio': {
				target: 'http://localhost:8082',
			},
			'/app-panel-control': {
				target: 'http://localhost:8083',
				pathRewrite: { '^/app-panel-control': '' },
			},
			'/app-tearsheet': {
				target: 'http://localhost:8084',
			},
			'/app-compensacion': {
				target: 'http://localhost:8085',
				pathRewrite: { '^/app-compensacion': '' },
			},
			'/app-portafolio-clientes': {
				target: 'http://localhost:8086'
			},
			'/app-catalogo-productos': {
				target: 'http://localhost:8087',
			},
			'/app-cotizador': {
				target: 'http://localhost:8088',
			},
			"/app-afore-azteca": {
				target: "http://localhost:8089"
			},
			'/app-surtimiento': {
				target: 'http://localhost:8090',
			},
			'/app-captacion': {
				target: 'http://localhost:8091',
				pathRewrite: { '^/app-captacion': '' },
			},
			'/app-recompra-renovacion': {
				target: 'http://localhost:8092',
			},
		},
	},
});