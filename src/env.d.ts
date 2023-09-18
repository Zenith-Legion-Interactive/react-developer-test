/// <reference types="vite/client" />
interface ImportMetaEnv {
	VITE__API_URL: string;
  VITE__API_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}