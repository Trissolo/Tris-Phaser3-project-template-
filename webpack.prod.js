const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        }),
				new webpack.DefinePlugin({
					"process.env.NODE_ENV": JSON.stringify("production")
				})
    ],
    
    optimization: {
    	minimize: true,
		  minimizer: [
		    new UglifyJSPlugin({
		    	uglifyOptions: {
		    		ecma: 6,
		    		output: {
				  	beautify: false,
				    comments: false,
				    ecma: 6
      			}
		    	} //end uglifyOptions
		    }) //end UglifyJSPlugin
		  ] // end minimizer
		} //end optimization

}) // end merge
