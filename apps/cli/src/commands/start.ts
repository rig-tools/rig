import { net } from '../modules/core';
import { CliCommand } from './types';

const start: CliCommand = {
  command: 'start',
  description: 'Start rig server',
  usage: '$0 [args]',
  builder: (_yargs) => {},
  handler: (_argv) => {
    net.startServer();
  },
};

export { start };
