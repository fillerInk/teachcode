#!/usr/bin/env node

'use strict';

// Importing depedencies
const program = require('commander');
const chalk = require('chalk');

// Linking excercise files
const { initialize } = require('../src/commands/init');
const { fetchTask } = require('../src/commands/tasks');
const { submitTask } = require('../src/commands/submit');
const { showKeys } = require('../src/commands/keys');
const { showCommands } = require('../src/commands/commands');
const { versionInfo } = require('../src/commands/version');

// Defines commands and corresponding action handlers
program
.command('version')
.description('Outputs version and local development environment information')
.action(versionInfo);

program
.command('init')
.description('Initialize challenges')
.action(initialize);

program
.command('submit')
.description('Submits current task')
.action(submitTask);

program
.command('fetchtask <key>')
.description('Fetches any task as per the key supplied')
.action(fetchTask);

program
.command('showkeys')
.description('Shows keys of all the completed tasks')
.action(showKeys);

program
.command('showcommands')
.description('Shows all commands available')
.action(showCommands);

// Validates any random command fired in
program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp();
    console.log(`  ` + chalk.red(`\n  Unknown command ${chalk.yellow(cmd)}.`));
    console.log();
});

program.parse(process.argv);

// Outputs help if no argument is provided
if(!program.args.length){
	program.help();
}
