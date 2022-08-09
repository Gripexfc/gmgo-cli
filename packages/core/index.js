#!/usr/bin/env node

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv;
const argv = process.argv.slice(2)
const cwd = process.cwd();

require('../cli/lib/cli')(argv, cwd);