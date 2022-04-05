import { execSync, exec, spawn } from 'child_process';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';

const NX_COMMIT = process.env.NX_COMMIT;
const NX_BRANCH = process.env.NX_BRANCH;
const NX_PR = process.env.NX_PR;

const PATH_TO_NX_LOCAL = join(process.cwd(), 'tmp/nx');

let localRegistry;

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

async function publishNxPackagesLocally() {
  execSync(`yarn install`, {
    shell: true,
  });

  runWithConsoleSpinner('Starting Local Registry Nx', () => {
    localRegistry = spawn(`yarn local-registry start`, {
      cwd: PATH_TO_NX_LOCAL,
      stdio: 'pipe',
      detached: true,
      shell: true,
    });
  });

  await new Promise((r) => setTimeout(r, 5000));

  runWithConsoleSpinner('Adding Local User', () => {
    execSync(
      `expect <<END
    spawn npm adduser --registry=http://localhost:4873
    expect "username"
    send "test\r"
    expect "password"
    send "test\r"
    expect "email"
    send "test@nrwl.io\r"
    expect eof
END`,
      { cwd: PATH_TO_NX_LOCAL, stdio: 'pipe', shell: true }
    );
  });

  runWithConsoleSpinner('Enable Local Registry', () => {
    execSync(`yes | yarn local-registry enable`, {
      cwd: PATH_TO_NX_LOCAL,
      stdio: 'pipe',
      shell: true,
    });
  });

  runWithConsoleSpinner('Release Nx Locally', () => {
    execSync(`yes | yarn nx-release 999.999.1000 --local`, {
      cwd: PATH_TO_NX_LOCAL,
      stdio: 'pipe',
      shell: true,
    });
  });

  updatePackageJsonPointToDist();
  cleanupLocalRegistry();
}

function cleanupLocalRegistry() {
  runWithConsoleSpinner('Disable Local Registry', () => {
    execSync(`yarn local-registry disable`, {
      cwd: PATH_TO_NX_LOCAL,
      stdio: 'pipe',
      shell: true,
    });

    try {
      process.kill(localRegistry.pid);
    } catch (e) {
    } finally {
      process.exit(0);
    }
  });
}

//update package.json to point to dist folders
function updatePackageJsonPointToDist() {
  // runWithConsoleSpinner('Pointing to local Nx builds', () => {
  //   const PKG_JSON_PATH = join(process.cwd(), 'package.json');
  //   const pkgJson = JSON.parse(
  //     readFileSync(PKG_JSON_PATH, { encoding: 'utf-8' })
  //   );
  //   const updatedPkgJson = {
  //     ...pkgJson,
  //     dependencies: {
  //       ...pkgJson.dependencies,
  //       '@nrwl/angular': '999.999.1000',
  //     },
  //     devDependencies: {
  //       ...pkgJson.devDependencies,
  //       '@nrwl/cypress': '999.999.1000',
  //       '@nrwl/eslint-plugin-nx': '999.999.1000',
  //       '@nrwl/jest': '999.999.1000',
  //       '@nrwl/linter': '999.999.1000',
  //       '@nrwl/tao': '999.999.1000',
  //       '@nrwl/workspace': '999.999.1000',
  //       nx: '999.999.1000',
  //     },
  //   };

  //   writeFileSync(PKG_JSON_PATH, JSON.stringify(updatedPkgJson, null, 2));
  // });
  try {
    execSync(
      `yarn add @nrwl/angular@999.999.1000 @nrwl/cypress@999.999.1000 @nrwl/eslint-plugin-nx@999.999.1000 @nrwl/jest@999.999.1000 @nrwl/linter@999.999.1000 @nrwl/tao@999.999.1000 @nrwl/workspace@999.999.1000 nx@999.999.1000`,
      {
        shell: true,
      }
    );
    // execSync(`yarn install`, {
    //   shell: true,
    // });
  } catch (e) {
    console.error(e);
    console.log(e.stderr.toString());
    throw e;
  }
}

tearDown();
cloneNx();
installNxDeps();
buildNx();
publishNxPackagesLocally();
