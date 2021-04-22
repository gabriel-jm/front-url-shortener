import { api } from '../lib/http/api'

interface UrlToSend {
  url: string
}

class UrlShortenerService {
  async save(data: UrlToSend) {
    const response = await api.post('/encurtador', data)

    return response
  }
}

export const urlShortenerService = new UrlShortenerService()
