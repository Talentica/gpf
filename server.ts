/* tslint:disable */
require('reflect-metadata');
import http = require("http");
import express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
import * as config from './config';
import * as securityConfig from 'nodedata/security-config';
import {router} from 'nodedata/core/exports';
import {repositoryMap} from 'nodedata/core/exports';
import {Container} from 'nodedata/di';

import * as data from 'nodedata/mongoose';
//---------sequelize setting-----------------------------
import * as seqData  from "nodedata/sequelizeimp";
var Main = require('nodedata/core');
Main(config, securityConfig, __dirname, data.entityServiceInst, seqData.sequelizeService);
//var Main = require('./core')(config, securityConfig, __dirname, data.entityServiceInst, seqData.sequelizeService);
data.connect();
data.generateSchema();
seqData.sequelizeService.connect();
seqData.generateSchema();

var app = express();
Main.register(app);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
var expressSession = require('express-session');
app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);
var server = (<any>http).createServer(app);
server.listen(23548);
