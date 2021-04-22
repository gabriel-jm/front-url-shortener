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
        cursor: default;
      }

      footer a {
        color: inherit;
        text-decoration: none;
      }

      footer a:hover {
        text-decoration: underline;
      }
    `
  }

  render() {
    return html`
      <footer>
        <p>Made with &#128420; by 
          <a
            href="https://www.linkedin.com/in/gabriel-jos%C3%A9-864590164/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Gabriel José.
          </a>
        </p>
      </footer>
    `
  }
}

customElements.define('app-footer', AppFooter)
