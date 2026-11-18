/* ============================================================
   Firebase 初始化模組 — 集中管理 App / Auth / Firestore 實例
   ============================================================ */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAI8pOKwIAsCGlDn43r2rMupBDXt_hadmA',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'osf-tec.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'osf-tec',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'osf-tec.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '832374171810',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:832374171810:web:5e698a0d855a263e848ffb',
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
