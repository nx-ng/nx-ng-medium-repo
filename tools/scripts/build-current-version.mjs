import { execSync } from 'child_process';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';

const NX_COMMIT = process.env.NX_COMMIT;
const NX_BRANCH = process.env.NX_BRANCH;
const NX_PR = process.env.NX_PR;

const PATH_TO_NX_LOCAL = join(process.cwd(), 'tmp/nx');

function runWithConsoleSpinner(text, action) {
  console.log(text);
  action();
}

function tearDown() {
  if (existsSync(PATH_TO_NX_LOCAL)) {
    runWithConsoleSpinner('Removing existing Nx Repo', () => {
      rmSync(PATH_TO_NX_LOCAL, { recursive: true, force: true });
    });
  }
}

function cloneNx() {
  runWithConsoleSpinner('Cloning Nx into tmp/nx', () => {
    execSync(`git clone https://github.com/nrwl/nx.git ${PATH_TO_NX_LOCAL}`, {
      stdio: 'ignore',
    });

    if (NX_COMMIT || NX_BRANCH || NX_PR) {
      runWithConsoleSpinner(
        'Checking out specified branch, commit or PR',
        () => {
          if (NX_PR && NX_BRANCH) {
            execSync(
              `git fetch origin pull/${NX_PR}/head:${NX_BRANCH} && git checkout ${NX_BRANCH}`,
              { cwd: PATH_TO_NX_LOCAL, stdio: 'ignore' }
            );
          } else if (NX_BRANCH) {
            execSync(`git checkout ${NX_BRANCH}`, {
              cwd: PATH_TO_NX_LOCAL,
              stdio: 'ignore',
            });
          } else if (NX_COMMIT) {
            execSync(`git checkout ${NX_COMMIT}`, {
              cwd: PATH_TO_NX_LOCAL,
              stdio: 'ignore',
            });
          }
        }
      );
    }
  });
}

function installNxDeps() {
  runWithConsoleSpinner('Install Nx Dependencies', () => {
    execSync(`yarn install`, { cwd: PATH_TO_NX_LOCAL, stdio: 'ignore' });
  });
}

function buildNx() {
  runWithConsoleSpinner('Build Nx', () => {
    execSync(`yarn build`, { cwd: PATH_TO_NX_LOCAL, stdio: 'pipe' });
  });
}

//update package.json to point to dist folders
function updatePackageJsonPointToDist() {
  runWithConsoleSpinner('Pointing to local Nx builds', () => {
    const PKG_JSON_PATH = join(process.cwd(), 'package.json');
    const pkgJson = JSON.parse(
      readFileSync(PKG_JSON_PATH, { encoding: 'utf-8' })
    );
    const updatedPkgJson = {
      ...pkgJson,
      dependencies: {
        ...pkgJson.dependencies,
        '@nrwl/angular': 'file:./tmp/nx/build/packages/angular',
      },
      devDependencies: {
        ...pkgJson.devDependencies,
        '@nrwl/cli': 'file:./tmp/nx/build/packages/cli',
        '@nrwl/cypress': 'file:./tmp/nx/build/packages/cypress',
        '@nrwl/eslint-plugin-nx':
          'file:./tmp/nx/build/packages/eslint-plugin-nx',
        '@nrwl/jest': 'file:./tmp/nx/build/packages/jest',
        '@nrwl/linter': 'file:./tmp/nx/build/packages/linter',
        '@nrwl/tao': 'file:./tmp/nx/build/packages/tao',
        '@nrwl/workspace': 'file:./tmp/nx/build/packages/workspace',
      },
    };

    writeFileSync(PKG_JSON_PATH, JSON.stringify(updatedPkgJson, null, 2));

    execSync(`yarn install`, { stdio: 'ignore' });
  });
}

tearDown();
cloneNx();
installNxDeps();
buildNx();
updatePackageJsonPointToDist();
