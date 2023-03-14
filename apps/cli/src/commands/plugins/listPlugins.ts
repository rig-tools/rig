import { getRigPlugins } from '../../modules/core';

import { logInfo } from '../../utils/logger';

export const listPlugins = () => {
  const plugins = getRigPlugins();

  for (const plugin of plugins) {
    logInfo(plugin.name);
  }
};
