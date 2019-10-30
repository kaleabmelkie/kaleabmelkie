import { NextApiRequest, NextApiResponse } from 'next'
import * as crypto from 'crypto'
import * as https from 'https'
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

  const options: https.RequestOptions = {
    method: 'GET',
    host: 'www.gravatar.com',
    port: 443,
    path: `/avatar/${emailHash}?${qs.stringify(request.query)}`
  }

  const proxyRequest = https
    .request(options, proxyResponse => {
      proxyResponse.headers['cache-control'] =
        'must_revalidate, public, max-age=31557600' // 1 year

      response.writeHead(proxyResponse.statusCode, proxyResponse.headers)
      proxyResponse.pipe(
        response,
        { end: true }
      )
    })
    .on('error', e => {
      console.error(e)
      response.status(500).end()
    })

  request.pipe(
    proxyRequest,
    { end: true }
  )
}
