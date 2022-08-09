#!/usr/bin/env node
'use strict';
const commandInit = require('../index')
const yargs = require("yargs/yargs");
const { hideBin } = require('yargs/helpers');
const { alias } = require("yargs");
module.exports = gmgoCLI;
function gmgoCLI(argv, cwd) {
    const cli = yargs(argv,cwd);
    commandInit(cli)
    .usage("Usage: $0 <command> [options]")
    .demandCommand(1, "A command is required. Pass --help to see all available commands and options.")
    .group(['help', 'version'], "Global Options:")
    .strict()// 严格模式，如果输入命令是lio-imooc-test -h，会提示Unknown的错误信息；如果没有加，会没有任何的反馈
    .recommendCommands()// 错误纠正提示
    .alias('h', 'help')
    .alias('v', 'version')
    .wrap(cli.terminalWidth()).epilogue('for more information, find our manual at https://github.com/Gripexfc/gmgo-cli')
    .parse(argv)
    // cli
    // .demandCommand(1, "A command is required. Pass --help to see all available commands and options.")
    // .usage("Usage: $0 <command> [options]")
    // .recommendCommands()
    // .strict()
    // .fail((msg, err) => {
    //     // certain yargs validations throw strings :P
    //    console.log(err,'err')
    //    console.log(msg,',sg')
    //   })
    // .parse(argv)
    // TODO
}
