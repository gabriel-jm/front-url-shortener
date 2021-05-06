import './icons/loading-icon'
import { SuperElement } from '../lib/super-element'
import { css } from '../lib/template-functions/css'
import { html } from '../lib/template-functions/html'

export interface IUrlInput extends HTMLElement {
  enable(): void
  disable(): void
}

class UrlInput extends SuperElement {
  #disabled = false

  init() {
    const input = this.select<HTMLInputElement>('input')
    const btn = this.select('button')

    btn.on('click', () => {
      if(this.#disabled) return

      const { value = '' } = input

      this.dispatchEvent(new CustomEvent('url-input-submit', {
        detail: { value }
      }))
    })
  }

  enable() {
    this.#disabled = false
    this.select('button').innerHTML = 'Generate'
  }

  disable() {
    this.#disabled = true
    this.select('button').innerHTML = html`<loading-icon />`
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
        color: inherit;
      }
      
      input {
        flex-grow: 1;
        font-size: 1rem;
        padding: 10px 16px;
        border: 2px solid #ccc;
        border-radius: 5px;
        transition: all 0.3s;
      }

      input:focus {
        border-color: var(--main);
        box-shadow: 0 0 0 3px var(--main-bright);
      }

      button {
        width: 120px;
        height: 48px;
        font-size: 0.97rem;
        padding: 16px 24px;
        border: 0;
        border-radius: 4px;
        color: white;
        background-color: var(--main);
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button:focus {
        box-shadow: 0 0 0 3px var(--main-bright);
      }

      button loading-icon {
        font-size: 0.6rem;
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
