import { SuperElement } from '../lib/super-element'
import { css } from '../lib/template-functions/css'
import { html } from '../lib/template-functions/html'

class UrlInput extends SuperElement {
  constructor() {
    super()
  }

  init() {
    const input = this.select<HTMLInputElement>('input')
    const btn = this.select('button')

    btn.on('click', () => {
      const { value = '' } = input

      this.dispatchEvent(new CustomEvent('url-input-submit', {
        detail: { value }
      }))
    })
  }

  cssStyle() {
    return css`
      * {
        box-sizing: border-box;
        outline: 0;
      }

      :host {
        display: flex;
        margin: auto;
        width: 100%;
        max-width: 500px;
        gap: 20px;
        justify-content: stretch;
      }

      input, button {
        font-family: 'Montserrat', sans-serif;
      }
      
      input {
        flex-grow: 1;
        font-size: 0.9rem;
        padding: 10px 14px;
        border: 2px solid #ccc;
        border-radius: 5px;
        transition: all 0.3s;
      }

      input:focus {
        border-color: var(--main);
        box-shadow: 0 0 0 3px var(--main-bright);
      }

      button {
        font-size: 0.9rem;
        padding: 12px 18px;
        border: 0;
        border-radius: 4px;
        color: white;
        background-color: var(--main);
        cursor: pointer;
        transition: all 0.3s;
      }

      button:focus {
        box-shadow: 0 0 0 3px var(--main-bright);
      }

      @media screen and (max-width: 425px) {
        :host {
          flex-direction: column;
        }
      }
    `
  }

  render() {
    return html`
      <input placeholder="Insert your url" />
      <button>Generate</button>
    `
  }
}

customElements.define('url-input', UrlInput)
