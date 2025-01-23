import { Tree, formatFiles } from '@nx/devkit';
import { libraryGenerator } from '@nx/js';
import { UtilLibGeneratorSchema } from './schema';

export default async function (tree: Tree, options: UtilLibGeneratorSchema) {
  console.log(options);
  await libraryGenerator(tree, {
    directory: `libs/${options.directory}/util-${options.name}`,
    name: `${options.directory}-util-${options.name}`,
    tags: `type:util,scope:${options.directory}`
  });
  await formatFiles(tree);
}
