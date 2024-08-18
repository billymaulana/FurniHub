import { $fetch } from 'ofetch'
import { getQuery } from 'ufo'

const FURNIHUB_API_URL = 'https://66c07429ba6f27ca9a56aa4a.mockapi.io/'

export default defineEventHandler(async (event) => {
  const query = getQuery(event.req.url!)
  // eslint-disable-next-line no-console
  console.log(
    'Fetching Nuxt Server API',
    {
      url: event.req.url,
      query,
      params: event.context.params,
    },
  )
  try {
    return await $fetch(event.context.params!.path, {
      baseURL: FURNIHUB_API_URL,
      params: {
        ...query,
      },
    })
  }
  catch (e: any) {
    const status = e?.response?.status || 500
    event.res.statusCode = status
    return e.message
  }
})
