
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PAYFAST_MERCHANT_ID: string
  readonly VITE_PAYFAST_MERCHANT_KEY: string
  readonly VITE_PAYFAST_PASSPHRASE: string
  readonly VITE_SITE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
