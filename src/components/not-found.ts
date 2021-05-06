import router from '../lib/router'
import { SuperElement } from '../lib/super-element'
import { css } from '../lib/template-functions/css'
import { html } from '../lib/template-functions/html'

class NotFound extends SuperElement {
  init() {
    const btn = this.select('button')

    btn.on('click', () => router.go('/'))
  }

  cssStyle() {
    return css`
      :host {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      span {
        font-weight: normal;
        color: #777;
      }

      button {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        border: 0;
        border-radius: 4px;
        padding: 12px 16px;
        color: #777;
        background-color: #dedede;
        cursor: pointer;
        outline: 0;
      }
    `
  }

  render() {
    return html`
      <h1>404 <span>|</span> Page not found :/</h1>
      <button>Go back Home</button>
    `
  }
}

customElements.define('not-found', NotFound)
