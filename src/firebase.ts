/* ============================================================
   Firebase 初始化模組 — 集中管理 App / Auth / Firestore 實例
   ============================================================ */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

let app: ReturnType<typeof initializeApp> | null = null;
let _auth: ReturnType<typeof getAuth> | null = null;
let _db: ReturnType<typeof getFirestore> | null = null;

try {
  app = initializeApp(firebaseConfig);
  _auth = getAuth(app);
  _db = getFirestore(app);
} catch (e) {
  console.warn('[Firebase] 初始化略過（API key 尚未設定）:', (e as Error).message);
}

export const auth = _auth;
export const db = _db;
