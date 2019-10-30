import { NextApiRequest, NextApiResponse } from 'next'
import * as crypto from 'crypto'
import * as http from 'http'
import qs from 'qs'

// * /api/gravatar?email&__gravatar-queries__
export default async (request: NextApiRequest, response: NextApiResponse) => {
  let email = request.query.email
  if (!email) return response.status(400).end()
  if (Array.isArray(email)) email = email[email.length - 1]

  const emailHash = decodeURIComponent(
    crypto
      .createHash('md5')
      .update(email)
      .digest('hex')
  )

  const options: http.RequestOptions = {
    method: 'GET',
    host: 'www.gravatar.com',
    port: 80,
    path: `/avatar/${emailHash}?${qs.stringify(request.query)}`
  }

  const proxy = http
    .request(options, res => {
      response.writeHead(res.statusCode, res.headers)
      res.pipe(
        response,
        { end: true }
      )
    })
    .on('error', e => {
      console.error(e)
      response.writeHead(500)
      response.end()
    })

  response.setHeader(
    'cache-control',
    'must_revalidate, public, max-age=31557600' // 1 year
  )

  request.pipe(
    proxy,
    { end: true }
  )
}
