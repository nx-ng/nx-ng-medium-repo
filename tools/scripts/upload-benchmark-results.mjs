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

const buildPreviousNxMinorVersionCold = (
  await import('../../results/build-previous-nx-minor-version-cold.json')
).default;
const buildPreviousNxMinorVersionWarm = (
  await import('../../results/build-previous-nx-minor-version-warm.json')
).default;
const testPreviousNxMinorVersionCold = (
  await import('../../results/test-previous-nx-minor-version-cold.json')
).default;
const testPreviousNxMinorVersionWarm = (
  await import('../../results/test-previous-nx-minor-version-warm.json')
).default;

await setDoc(
  doc(db, 'benchmarks', 'build-previous-nx-minor-version-cold'),
  results
);
await setDoc(
  doc(db, 'benchmarks', 'build-previous-nx-minor-version-warm'),
  results
);
await setDoc(
  doc(db, 'benchmarks', 'test-previous-nx-minor-version-cold'),
  results
);
await setDoc(
  doc(db, 'benchmarks', 'test-previous-nx-minor-version-warm'),
  results
);

process.exit(0);
