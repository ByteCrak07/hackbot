import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/(.*)',
}

// to block access to any other preview deployments
export function middleware(req: NextRequest) {
  if (process.env.VERCEL_ENV === 'production') return NextResponse.next()

  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const credentials = atob(authValue)

    if (credentials === process.env.DEV_AUTH) {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
