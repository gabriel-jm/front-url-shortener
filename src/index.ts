import { html } from './lib/template-functions/html'

const routes: Record<string, string> = {
  '/': 'app-home',
  notFound: 'not-found'
}

class AppRoot extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = this.render()
    this.config()
    import('./components/imports')
  }

  config() {
    window.addEventListener('popstate', () => this.reRender())
  }

  handleUrl() {
    const { pathname } = window.location

    return pathname in routes
      ? routes[pathname]
      : routes.notFound
  }

  reRender() {
    this.shadowRoot.innerHTML = html`<${this.handleUrl()}/>`
  }

  render() {
    return html`<${this.handleUrl()}/>`
  }
}

customElements.define('app-root', AppRoot)
