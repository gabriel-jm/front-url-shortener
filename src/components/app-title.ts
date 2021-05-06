import { SuperElement } from '../lib/super-element'
import { css } from '../lib/template-functions/css'
import { html } from '../lib/template-functions/html'

class AppTitle extends SuperElement {
  cssStyle() {
    return css`
      header {
        background-color: var(--main);
        padding: 20px 0;
      }

      h1 {
        color: white;
        text-align: center;
        margin: 0;
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
