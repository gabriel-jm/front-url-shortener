import { SuperElement } from '../lib/super-element'
import { css } from '../lib/template-functions/css'
import { html } from '../lib/template-functions/html'

class AppTitle extends SuperElement {
  constructor() {
    super()
  }

  cssStyle() {
    return css`
      h1 {
        color: var(--main);
        padding: 0 0 16px;
        text-align: center;
        border-bottom: 1px solid var(--main);
      }
    `
  }

  render() {
    return html`
      <header>
        <h1>URL Shortener</h1>
      </header>
    `
  }
}

customElements.define('app-title', AppTitle)
