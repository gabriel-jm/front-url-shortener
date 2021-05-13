import '../../icons/loading-icon'
import { SuperElement } from '../../../lib/super-element'
import { css } from '../../../lib/template-functions/css'
import { html } from '../../../lib/template-functions/html'

export interface IUrlInput extends HTMLElement {
  enable(): void
  disable(): void
}

class UrlInput extends SuperElement {
  #disabled = false

  init() {
    const input = this.select<HTMLInputElement>('input')
    const form = this.select('form')

    form.on('submit', e => {
      e.preventDefault()

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

      form {
        margin: auto;
        width: 100%;
        max-width: 500px;
        display: flex;
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
        border: 1px solid var(--main);
        border-radius: 4px;
        color: var(--main);
        background-color: transparent;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button:focus {
        background-color: var(--main);
        color: white;
        box-shadow: 0 0 0 3px var(--main-bright);
      }

      button:hover {
        background-color: var(--main);
        color: white;
      }

      button loading-icon {
        font-size: 0.6rem;
      }

      @media screen and (max-width: 425px) {
        form {
          flex-direction: column;
          padding: 0 18px;
        }

        button {
          width: 100%;
        }
      }
    `
  }

  render() {
    return html`
      <form>
        <input placeholder="Insert your url" />
        <button>Generate</button>
      </form>
    `
  }
}

customElements.define('url-input', UrlInput)
