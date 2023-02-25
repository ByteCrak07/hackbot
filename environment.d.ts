declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_PB_URL: string
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string
    NEXT_PUBLIC_HOTJAR_HJID: number
    NEXT_PUBLIC_HOTJAR_HJSV: number
    VERCEL_ENV: 'production' | 'preview' | 'development'
    NEXT_PUBLIC_VERCEL_ENV: 'production' | 'preview' | 'development'
    DEV_AUTH: string
  }
}
