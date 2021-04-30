import { SuperElement } from '../lib/super-element'
import { css } from '../lib/template-functions/css'
import { html } from '../lib/template-functions/html'

class MessageBox extends SuperElement {
  constructor() {
    super()
  }

  get message() {
    return this.getAttribute('message') || ''
  }

  cssStyle() {
    return css`
      :host {
        --border-color: #aaa;

        display: block;
        box-sizing: border-box;
        max-width: 500px;
        border-radius: 4px;
        border: 1px solid var(--border-color);
        padding: 20px;
      }

      :host(.success) {
        --border-color: #94f79f;
      }

      p {
        margin: 0;
      }
    `
  }

  render() {
    return html`
      <p>${this.message}</p>
    `
  }
}

customElements.define('message-box', MessageBox)
