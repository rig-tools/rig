import { join } from 'path';
import { readJSONSync } from 'fs-extra';

type PackageJson = {
  name: string;
  // TODO: Tucker This wont always be defined
  main: string;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  rig?: {
    plugin: true;
  };
};

type PluginData = {
  name: string;
  packagePath: string;
  mainPath: string;
};

export const getRigPlugins = (): PluginData[] => {
  const cwd = process.cwd();

  const packagePath = join(cwd, 'package.json');

  const packageContent: PackageJson = readJSONSync(packagePath);

  const dependencies = packageContent.dependencies ?? {};
  const devDependencies = packageContent.devDependencies ?? {};

  const allDeps = [
    ...Object.keys(dependencies),
    ...Object.keys(devDependencies),
  ];

  const rigPlugins = [];

  for (const dep of allDeps) {
    const depPackagePath = join(cwd, 'node_modules', dep, 'package.json');
    const depPackageContent: PackageJson = readJSONSync(depPackagePath);

    if (depPackageContent.rig && depPackageContent.rig.plugin) {
      rigPlugins.push({
        name: depPackageContent.name,
        packagePath: depPackagePath,
        mainPath: join(cwd, 'node_modules', dep, depPackageContent.main),
      });
    }
  }

  return rigPlugins;
};
