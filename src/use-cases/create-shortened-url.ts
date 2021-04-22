import { urlShortenerService } from '../services/url-shortener-service'

const urlValidationRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

export async function createShortenedUrl(rawUrl: string) {
  const match = rawUrl.trim().match(urlValidationRegex)

  if(!match || match[0] !== rawUrl) {
    throw new Error('Insert an URL with a valid format')
  }

  const response = await urlShortenerService.save({
    url: rawUrl
  })

  if(!response.ok) {
    throw new Error('Shortened Url creation error')
  }
}
