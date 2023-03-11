import { net } from '../packages/core';
import { CliCommand } from './types';

const start: CliCommand = {
  command: 'start',
  description: 'Start rig server',
  usage: '$0 [args]',
  builder: (yargs) => {},
  handler: (argv) => {
    net.startServer();
  },
};

export { start };
