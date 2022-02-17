import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';

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
const nxVersion = devDependencies['@nrwl/tao'];

const buildPreviousNxMinorVersionCold = (
  await import('../../results/build-previous-ng-major-version-cold.json', {
    assert: { type: 'json' },
  })
).default;
const buildPreviousNxMinorVersionWarm = (
  await import('../../results/build-previous-ng-major-version-warm.json', {
    assert: { type: 'json' },
  })
).default;
const testPreviousNxMinorVersionCold = (
  await import('../../results/test-previous-ng-major-version-cold.json', {
    assert: { type: 'json' },
  })
).default;
const testPreviousNxMinorVersionWarm = (
  await import('../../results/test-previous-ng-major-version-warm.json', {
    assert: { type: 'json' },
  })
).default;

const currentUploadTime = `${Date.now()}`;

await setDoc(
  doc(db, 'build-previous-ng-major-version-cold', currentUploadTime),
  { ...buildPreviousNxMinorVersionCold, angularVersion, nxVersion }
);
await setDoc(
  doc(db, 'build-previous-ng-major-version-warm', currentUploadTime),
  { ...buildPreviousNxMinorVersionWarm, angularVersion, nxVersion }
);
await setDoc(
  doc(db, 'test-previous-ng-major-version-cold', currentUploadTime),
  { ...testPreviousNxMinorVersionCold, angularVersion, nxVersion }
);
await setDoc(
  doc(db, 'test-previous-ng-major-version-warm', currentUploadTime),
  { ...testPreviousNxMinorVersionWarm, angularVersion, nxVersion }
);

process.exit(0);
