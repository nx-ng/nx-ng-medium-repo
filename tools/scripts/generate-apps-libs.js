const { execSync } = require('child_process');
const { writeFileSync } = require('fs');
const { names } = require('@nrwl/devkit');
const ora = require('ora');

const apps = [
  {
    name: 'app0',
  },
];
const config = {
  numberOfLibsPerLevel: [2, 2, 2],
  numberOfComponentsPerLib: 100,
};

function componentName(component) {
  return names(component).className + 'Component';
}

function moduleName(libName) {
  return names(libName).className + 'Module';
}

function generateLib(appName, libName, level, buildableLib) {
  let spinner = ora(`generating ${libName} for ${appName}`).start();

  execSync(
    `yarn nx g @nrwl/angular:lib ${libName} --directory=${appName} --simpleModuleName`
  );

  spinner.succeed();

  spinner = ora('generating components').start();

  const componentNames = [];

  for (let i = 0; i < config.numberOfComponentsPerLib; i++) {
    componentNames.push(`${libName}component${i}`);
  }

  componentNames.forEach((componentName, index) => {
    execSync(
      `yarn nx g @nrwl/angular:component ${componentName} --project=${appName}-${libName}`
    );
  });

  spinner.succeed('generating components');

  execSync(
    `yarn nx g @nrwl/angular:component ${libName}parent --project=${appName}-${libName} --export`
  );

  const componentImports = componentNames
    .map(
      (component) =>
        `import { ${componentName(
          component
        )} } from './${component}/${component}.component';`
    )
    .join('\n');
  const parentComponentImport = `import { ${componentName(
    libName + 'parent'
  )} } from './${libName}parent/${libName}parent.component';`;

  const ngModuleDeclarations = [...componentNames, `${libName}parent`]
    .map((component) => componentName(component))
    .join(', ');

  const exports = `export * from './lib/${libName}.module';
export * from './lib/${libName}parent/${libName}parent.component';`;

  writeFileSync(`libs/${appName}/${libName}/src/index.ts`, exports);

  let selectors = componentNames
    .map((c) => `<nx-ng-medium-${c}></nx-ng-medium-${c}>`)
    .join('\n');

  if (level < config.numberOfLibsPerLevel.length - 1) {
    const childLibNames = generateLibs(
      appName,
      buildableLib,
      level + 1,
      libName
    );

    selectors += `\n${childLibNames
      .map((lib) => `<nx-ng-medium-${lib}parent></nx-ng-medium-${lib}parent>`)
      .join('\n')}`;

    const childLibModuleImports = childLibNames
      .map(
        (libName) =>
          `import { ${moduleName(
            libName
          )} } from '@nx-ng-medium/${appName}/${libName}';`
      )
      .join('\n');

    const ngModuleImports = childLibNames
      .map((libName) => moduleName(libName))
      .join(', ');

    writeFileSync(
      `libs/${appName}/${libName}/src/lib/${libName}.module.ts`,
      `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
${componentImports}
${parentComponentImport}
${childLibModuleImports}

@NgModule({
  imports: [CommonModule, ${ngModuleImports}],
  declarations: [${ngModuleDeclarations}],
  exports: [${componentName(libName + 'parent')}],
})
export class ${moduleName(libName)} {}
`
    );
  }

  writeFileSync(
    `libs/${appName}/${libName}/src/lib/${libName}parent/${libName}parent.component.html`,
    `<div>
  ${selectors}
</div>`
  );
}

function generateLibs(appName, buildableLibs, level = 0, parentLibName) {
  const libNames = [];

  for (let i = 0; i < config.numberOfLibsPerLevel[level]; i++) {
    const libName = parentLibName ? `${parentLibName}-lib${i}` : `lib${i}`;
    libNames.push(libName);
    generateLib(appName, libName, level, buildableLibs);
  }

  return libNames;
}

function generateApp(app) {
  const spinner = ora(`generating ${app.name}`).start();

  execSync(
    `yarn nx g @nrwl/angular:app ${app.name} --style=scss --routing --no-interactive`
  );

  spinner.succeed();

  const libNames = generateLibs(app.name, app.buildableLibs);

  const selectors = libNames
    .map((lib) => `<nx-ng-medium-${lib}parent></nx-ng-medium-${lib}parent>`)
    .join('\n');

  writeFileSync(
    `apps/${app.name}/src/app/app.component.html`,
    `<div>
  ${selectors}
</div>`
  );

  const imports = libNames
    .map(
      (libName) =>
        `import { ${moduleName(libName)} } from '@nx-ng-medium/${
          app.name
        }/${libName}';`
    )
    .join('\n');

  const moduleImports = libNames
    .map((libName) => moduleName(libName))
    .join(', ');

  writeFileSync(
    `apps/${app.name}/src/app/app.module.ts`,
    `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

${imports}

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ${moduleImports}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
`
  );
}

apps.forEach((app) => generateApp(app));
