// import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import SanityClient from 'next-sanity-client'

// export const client = createClient({
//   apiVersion,
//   dataset,
//   projectId,
//   useCdn,
// })
export const client = new SanityClient({
  dataset,
  projectId,
  useCdn,
})