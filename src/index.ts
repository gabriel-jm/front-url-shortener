import './components/imports'
import { html } from './lib/template-functions/html'
import { routes } from './routes'

class AppRoot extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.render()
    this.config()
  }

  config() {
    window.addEventListener('popstate', () => this.render())
  }

  handleUrl() {
    const { pathname } = window.location

    return pathname in routes
      ? routes[pathname]
      : routes.notFound
  }

  render() {
    this.shadowRoot.innerHTML = html`
      <style>
        :host {
          height: 100%;
        }
      </style>
      <${this.handleUrl()}/>
    `
  }
}

customElements.define('app-root', AppRoot)
