#!/usr/bin/env node
'use strict';

/**
 * A script to load this environment's configuration and emit a few of
 * its settings.
 */

const path = require('path');
const assert = require('assert');
const ConfigReader = require('./src/config-reader');


let configRoot = path.join(__dirname, 'config');
let configReader = new ConfigReader(process.env, configRoot);

configReader.getConfig((error, config) => {
  if (error) {
    throw error;
  }

  process.stdout.write(`setting1: ${config.get('setting1')}\n`);
  process.stdout.write(`setting2: ${config.get('module.setting2')}\n`);
  process.stdout.write(`setting3: ${config.get('module.submodule.setting3')}`);
});



