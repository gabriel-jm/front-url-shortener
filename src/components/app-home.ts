import './app-title'
import './app-footer'
import { SuperElement } from '../lib/super-element'
import { css } from '../lib/template-functions/css'
import { html } from '../lib/template-functions/html'
import { createShortenedUrl } from '../use-cases/create-shortened-url'

class AppHome extends SuperElement {
  constructor() {
    super()
  }

  init() {
    const input = this.select<HTMLInputElement>('[url-input]')
    const btn = this.select('button')

    btn.on('click', () => {
      const { value = '' } = input

      createShortenedUrl(value)
    })
  }

  cssStyle() {
    return css`
      :host {
        display: grid;
        height: 100%;
        grid-template-rows: 70px auto 60px;
      }

      div {
        padding: 0 16px;
        text-align: center;
      }

      .url-input {
        width: max-content;
        margin: auto;
        text-align: left;
      }
      
      .url-input input {
        display: block;
      }
    `
  }

  render() {
    return html`
      <app-title />

      <section>
        <div>
          <p>Enter the long URL and get a short one</p>
        </div>

        <div class="url-input">
          <label>
            <span>Url</span>
            <input url-input placeholder="Insert your url" />
          </label>
          <button>Generate</button>
        </div>
      </section>

      <app-footer />
    `
  }
}

customElements.define('app-home', AppHome)
