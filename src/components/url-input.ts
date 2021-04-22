import { SuperElement } from "../lib/super-element";
import { css } from '../lib/template-functions/css';
import { html } from '../lib/template-functions/html';

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
        width: max-content;
        margin: auto;
        text-align: left;
        padding: 0 16px;
        gap: 10px;
      }

      input, button {
        font-family: 'Montserrat', sans-serif;
      }

      span {
        display: inline-block;
        font-size: 1.3rem;
        color: #777;
        margin-bottom: 5px;
      }
      
      input {
        font-size: 0.9rem;
        display: block;
        padding: 10px 14px;
        border: 2px solid #ccc;
        border-radius: 5px;
        outline: 0;
        transition: all 0.3s;
      }

      input:focus {
        border: 2px solid var(--main);
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
        align-self: flex-end
      }
    `
  }

  render() {
    return html`
      <label>
        <span>Url</span>
        <input placeholder="Insert your url" />
      </label>
      <button>Generate</button>
    `
  }
}

customElements.define('url-input', UrlInput)
