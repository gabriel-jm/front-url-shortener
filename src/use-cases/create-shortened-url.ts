import { urlShortenerService } from '../services/url-shortener-service'

const urlValidationRegex = /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

export async function createShortenedUrl(rawUrl: string) {
  const match = rawUrl.trim().match(urlValidationRegex)

  if(!match || match[0] !== rawUrl) {
    return {
      ok: false,
      data: 'Invalid URL format' + (
        (!rawUrl.includes('http') && !rawUrl.includes('https'))
          ? '.\nPlease add http:// or https://'
          : ''
      )
    }
  }

  const response = await urlShortenerService.save({
    url: rawUrl
  })

  if(!response.ok) {
    return {
      ok: false,
      data: response.data?.error || 'Shortened URL creation error'
    }
  }

  return {
    ok: response.ok,
    data: response.data
  }
}
