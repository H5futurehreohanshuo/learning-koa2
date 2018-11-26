'use strict';

var _ex = require('./ex');

var _ex2 = _interopRequireDefault(_ex);

var _util = require('util');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_ex.name); /* import { promisify } from 'util';
                       import { resolve as r } from 'path';
                       import { readFile, writeFileSync as wfs, read } from 'fs';
                       import * as qs from 'querystring';
                       
                       promisify(readFile)(r(__dirname, '../package.json'))
                         .then(data => {
                           data = JSON.parse(data);
                       
                           console.log(data.name);
                       
                           wfs(r(__dirname, './name'), String(data.name), 'utf8');
                         }) */

console.log((0, _ex.getName)());
console.log(_ex2.default);

async function init() {
  let data = await (0, _util.promisify)(_fs2.default.readFile)((0, _path.resolve)(__dirname, '../package.json'));

  data = JSON.parse(data);

  console.log(data.name);
}

init();