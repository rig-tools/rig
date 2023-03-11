import { ArgumentsCamelCase, BuilderCallback } from 'yargs';

export interface CliCommand {
  command: string;
  description: string;
  usage: string;
  builder: BuilderCallback<{}, {}>;
  handler: (argv: ArgumentsCamelCase) => void;
}
