import { SuperElement } from '../lib/super-element'
import { html } from '../lib/template-functions/html'

class NotFound extends SuperElement {
  constructor() {
    super()
  }

  render() {
    return html`
      <h1>Page not found :/</h1>
    `
  }
}

customElements.define('not-found', NotFound)
