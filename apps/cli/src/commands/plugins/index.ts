import { CliCommand } from '../types';

import { listPlugins } from './listPlugins';

const plugins: CliCommand = {
  command: 'plugins',
  description: 'Start rig server',
  usage: '$0 [sub] [args]',
  builder: (yargs) => {
    yargs.option('sub', {
      choices: ['list'],
      type: 'string',
      describe: 'Command',
    });
  },
  handler: ({ _: [_mainCommand, subCommand] }) => {
    if (subCommand === 'list') {
      listPlugins();
    }
  },
};

export { plugins };
