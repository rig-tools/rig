import chalk from 'chalk';

export const logInfo = (toLog: string) => {
  console.log(
    `${chalk.blueBright('[INFO]')}${chalk.white(':')}${chalk.white(toLog)}`,
  );
};
