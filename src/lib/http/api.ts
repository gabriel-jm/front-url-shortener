let baseUrl = ''

const api = (url: string) => {
  baseUrl = url
}

api.get = async (url: string) => {
  return await request(baseUrl+url, 'GET')
}

api.post = async <TReturn, TEntry extends Object = TReturn>(url: string, data: TEntry) => {
  return await request(baseUrl+url, 'POST', data)
}

api.delete = async (url: string) => {
  return await request(baseUrl+url, 'DELETE')
}

async function request(url: string, method: string, body?: object | []) {
  const headers = <RequestInit>{
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }

  try {
    const response = await fetch(url, headers)
    const data = await response.json()
    
    return {
      ok: response.ok,
      status: response.status,
      data
    }
  } catch(err) {
    console.dir(err)
    return {
      ok: false
    }
  }
}

api(process.env.SERVER_URL)

export { api }
