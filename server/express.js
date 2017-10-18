/**
 * Created by yujingyang on 2017/3/15.
 */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var bodyParser = require('body-parser');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackDevConfig = require('../webpack.config');

var CSS_DIR = path.join(__dirname,"..","css");
var IMG_DIR = path.join(__dirname,"..","imgs");
var JS_DIR = path.join(__dirname,"..","js");
module.exports = function () {
    var app = new express();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())




    require('./api')(app);


    var APP_PORT = 3001;
    app.listen(APP_PORT, function (error) {
        if (error) {
            console.error(error);
        } else {
            console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", APP_PORT, APP_PORT);
        }
    });
};
