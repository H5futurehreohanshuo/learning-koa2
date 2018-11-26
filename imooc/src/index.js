/* import { promisify } from 'util';
import { resolve as r } from 'path';
import { readFile, writeFileSync as wfs, read } from 'fs';
import * as qs from 'querystring';

promisify(readFile)(r(__dirname, '../package.json'))
  .then(data => {
    data = JSON.parse(data);

    console.log(data.name);

    wfs(r(__dirname, './name'), String(data.name), 'utf8');
  }) */

import { name } from './ex';
import { getName } from './ex';
import age from './ex';

console.log(name);
console.log(getName());
console.log(age);

import { promisify } from 'util';
import fs from 'fs';
import { resolve as r } from 'path';

async function init() {
  let data = await promisify(fs.readFile)(r(__dirname, '../package.json'));

  data = JSON.parse(data);

  console.log(data.name);
}

init();