import './icons/clipboard-icon'
import './icons/close-icon'
import { SuperElement } from '../lib/super-element'
import { css } from '../lib/template-functions/css'
import { html } from '../lib/template-functions/html'
import { raw } from '../lib/template-functions/raw-html'

export class MessageBox extends SuperElement {
  constructor() {
    super()
  }

  get message() {
    return this.getAttribute('message') || ''
  }

  set message(value: string) {
    this.setAttribute('message', value)

    this.select('p').innerText = value
    this.select('div').innerHTML = this.className === ''
      ? html`<clipboard-icon />`
      : html`<close-icon />`
  }

  connectedCallback() {
    this.select('close-icon')?.on('click', () => this.remove(), { once: true })
    this.select('clipboard-icon')?.on('click', () => {
      navigator.clipboard.writeText(this.message)
    })
  }

  cssStyle() {
    return css`
      :host {
        --bg-color: #efefef;
        --color: #777;
        --border-color: #bbb;

        display: flex;
        box-sizing: border-box;
        max-width: 500px;
        color: var(--color);
        background-color: var(--bg-color);
        border-radius: 4px;
        border: 1px solid var(--border-color);
        padding: 20px;
        justify-content: space-between;
        align-items: center;
        animation: drop 0.8s 0.2s backwards;
      }

      :host(.error) {
        --bg-color: #f3d7db;
        --color: #b91528;
        --border-color: #b91528;
      }

      p {
        width: 90%;
        margin: 0;
        word-wrap: break-word;
      }

      div * {
        cursor: pointer;
      }

      @keyframes drop {
        from {
          transform: translateY(-50px);
          opacity: 0;
        }

        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `
  }

  render() {
    return html`
      <p>${this.message}</p>
      <div>
        ${
          this.className === ''
          ? raw`<clipboard-icon />`
          : raw`<close-icon />`
        }
      </div>
    `
  }
}

customElements.define('message-box', MessageBox)
