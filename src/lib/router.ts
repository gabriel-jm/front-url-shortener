class Router {
  go(path: string) {
    const [strMatch] = path.match(/^\/[a-zA-Z0-9\-\/]*/)

    if(strMatch !== path) {
      throw new Error('Invalid path format!!!')
    }

    if(path === location.pathname) {
      history.replaceState(null, '', path)
    } else {
      history.pushState(null, '', path)
    }

    window.dispatchEvent(new Event('popstate'))
  }
}

export default new Router()
