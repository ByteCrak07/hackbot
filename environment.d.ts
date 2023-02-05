declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string
    NEXT_PUBLIC_HOTJAR_HJID: number
    NEXT_PUBLIC_HOTJAR_HJSV: number
    VERCEL_ENV: 'production' | 'preview' | 'development'
  }
}
