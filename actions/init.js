import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { template } from '../utils/template-generator.js';

const createStructure = async (pathSource, moduleName) => {
  const pathToFiles = path.join(pathSource, `${moduleName}`);

  if (fs.existsSync(pathToFiles)) {
    console.log(`El módulo ${moduleName} ya existe 🧙`);
    return;
  }

  /* build module  folder */
  fs.mkdirSync(pathToFiles);

  template(moduleName).forEach(({ name, extension, content }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, type] = name.split('.');

    if (type === 'module') {
      const rootModule = path.resolve(pathToFiles, [name, extension].join('.'));
      fs.writeFileSync(rootModule, content, 'utf8');
    }

    const pathToDomain = path.join(pathToFiles, 'domain');
    if (!fs.existsSync(pathToDomain)) {
      fs.mkdirSync(pathToDomain);
    }

    const pathToInterfaces = path.join(pathToDomain, 'interfaces');
    if (!fs.existsSync(pathToInterfaces)) {
      fs.mkdirSync(pathToInterfaces);
    }

    if (type === 'entity') {
      const pathToModels = path.join(pathToDomain, 'models');
      if (!fs.existsSync(pathToModels)) {
        fs.mkdirSync(pathToModels);
      }

      const pathToEntities = path.join(pathToModels, 'entities');
      if (!fs.existsSync(pathToEntities)) {
        fs.mkdirSync(pathToEntities);
        const entity = path.resolve(pathToEntities, [name, extension].join('.'));
        fs.writeFileSync(entity, content, 'utf8');
      }

      const pathToEnums = path.join(pathToModels, 'enums');
      if (!fs.existsSync(pathToEnums)) {
        fs.mkdirSync(pathToEnums);
      }
    }

    const pathToUtils = path.join(pathToDomain, 'utils');
    if (!fs.existsSync(pathToUtils)) {
      fs.mkdirSync(pathToUtils);
    }

    if (type === 'service') {
      const service = path.resolve(pathToDomain, [name, extension].join('.'));
      fs.writeFileSync(service, content, 'utf8');
    }

    const pathToInfrastructure = path.join(pathToFiles, 'infrastructure');
    if (!fs.existsSync(pathToInfrastructure)) {
      fs.mkdirSync(pathToInfrastructure);
    }

    if (type === 'controller') {
      const pathToControllers = path.join(pathToInfrastructure, 'controllers');
      if (!fs.existsSync(pathToControllers)) {
        fs.mkdirSync(pathToControllers);
      }

      const pathToDtos = path.join(pathToControllers, 'dtos');
      if (!fs.existsSync(pathToDtos)) {
        fs.mkdirSync(pathToDtos);
      }

      const pathToInterfacesController = path.join(pathToControllers, 'interfaces');
      if (!fs.existsSync(pathToInterfacesController)) {
        fs.mkdirSync(pathToInterfacesController);
      }

      const pathToSerializers = path.join(pathToControllers, 'serializers');
      if (!fs.existsSync(pathToSerializers)) {
        fs.mkdirSync(pathToSerializers);
      }

      const pathToController = path.join(pathToControllers, `${moduleName}.controller.ts`);
      if (!fs.existsSync(pathToController)) {
        fs.writeFileSync(pathToController, content, 'utf8');
      }
    }

    if (type === 'repository') {
      const pathToRepositories = path.join(pathToInfrastructure, 'repositories');
      if (!fs.existsSync(pathToRepositories)) {
        fs.mkdirSync(pathToRepositories);
      }

      const pathToRepository = path.join(pathToRepositories, `${moduleName}.repository.ts`);
      if (!fs.existsSync(pathToRepository)) {
        fs.writeFileSync(pathToRepository, content, 'utf8');
      }

      const pathToExceptions = path.join(pathToRepositories, 'exceptions');
      if (!fs.existsSync(pathToExceptions)) {
        fs.mkdirSync(pathToExceptions);
      }
    }
  });

  console.log(`El módulo ${moduleName} se ha creado correctamente 🧙`);
};

const init = async (pathSource, module) => {
  const moduleName = _.kebabCase(module);
  return createStructure(pathSource, moduleName);
};

export default init;
