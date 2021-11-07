import { build, files, timestamp } from '$service-worker'
import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute([
  ...build.map((f) => ({ url: f, revision: null })),
  ...files.map((f) => ({ url: f, revision: `${timestamp}` })),
])
