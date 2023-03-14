import { join } from 'path';
import { readJSONSync } from 'fs-extra';

type PackageJson = {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  rig?: {
    plugin: true;
  };
};

export const getRigPlugins = () => {
  const cwd = process.cwd();

  const packagePath = join(cwd, 'package.json');

  const packageContent: PackageJson = readJSONSync(packagePath);

  const dependencies = packageContent.dependencies ?? {};
  const devDependencies = packageContent.devDependencies ?? {};

  const allDeps = [
    ...Object.keys(dependencies),
    ...Object.keys(devDependencies),
  ];

  const activePlugins = [];

  for (const dep of allDeps) {
    const depPackagePath = join(cwd, 'node_modules', dep, 'package.json');
    const depPackageContent: PackageJson = readJSONSync(depPackagePath);

    if (depPackageContent.rig && depPackageContent.rig.plugin) {
      activePlugins.push(dep);
    }
  }

  return activePlugins;
};
