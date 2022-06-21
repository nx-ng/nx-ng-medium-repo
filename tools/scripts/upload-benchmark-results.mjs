import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';

const NX_COMMIT = process.env.NX_COMMIT;
const NX_BRANCH = process.env.NX_BRANCH;
const NX_PR = process.env.NX_PR;

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
await signInAnonymously(auth);

const { devDependencies, dependencies } = (
  await import('../../package.json', { assert: { type: 'json' } })
).default;

const angularVersion = dependencies['@angular/core'];
const nxVersion = devDependencies['nx'];

const buildCurrentVersionCold = (
  await import('../../results/build-current-version-cold.json', {
    assert: { type: 'json' },
  })
).default;
const buildCurrentVersionCache = (
  await import('../../results/build-current-version-cache.json', {
    assert: { type: 'json' },
  })
).default;
const testCurrentVersionCold = (
  await import('../../results/test-current-version-cold.json', {
    assert: { type: 'json' },
  })
).default;
const lintCurrentVersionCold = (
  await import('../../results/lint-current-version-cold.json', {
    assert: { type: 'json' },
  })
).default;

const currentUploadTime = `${Date.now()}`;

await setDoc(doc(db, 'build-current-version-cold', currentUploadTime), {
  ...buildCurrentVersionCold,
  angularVersion,
  nxVersion,
  nxCommit: NX_COMMIT || null,
  nxBranch: NX_BRANCH || null,
  nxPR: NX_PR || null,
});
await setDoc(doc(db, 'build-current-version-cache', currentUploadTime), {
  ...buildCurrentVersionCache,
  angularVersion,
  nxVersion,
  nxCommit: NX_COMMIT || null,
  nxBranch: NX_BRANCH || null,
  nxPR: NX_PR || null,
});
await setDoc(doc(db, 'test-current-version-cold', currentUploadTime), {
  ...testCurrentVersionCold,
  angularVersion,
  nxVersion,
  nxCommit: NX_COMMIT || null,
  nxBranch: NX_BRANCH || null,
  nxPR: NX_PR || null,
});
await setDoc(doc(db, 'lint-current-version-cold', currentUploadTime), {
  ...lintCurrentVersionCold,
  angularVersion,
  nxVersion,
  nxCommit: NX_COMMIT || null,
  nxBranch: NX_BRANCH || null,
  nxPR: NX_PR || null,
});

process.exit(0);
