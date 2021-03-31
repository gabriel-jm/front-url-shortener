import { SuperElement } from '../lib/super-element'
import { css } from '../lib/template-functions/css'
import { html } from '../lib/template-functions/html'

class AppFooter extends SuperElement {
  constructor() {
    super()
  }

  cssStyle() {
    return css`
      footer {
        border-top: 1px solid #ddd;
        text-align: center;
        color: #777;
      }

      footer p {
        margin: 0;
        padding: 18px 0;
      }
    `
  }

  render() {
    return html`
      <footer>
        <p>Made with &#128151; by Gabriel José.</p>
      </footer>
    `
  }
}

customElements.define('app-footer', AppFooter)
