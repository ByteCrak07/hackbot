import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.setHeader('WWW-authenticate', 'Basic realm="Development site"')
  res.statusCode = 401
  res.end(`Authorization Required.`)
}
