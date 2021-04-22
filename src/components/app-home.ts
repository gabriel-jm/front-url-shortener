import './app-title'
import './app-footer'
import './url-input'
import { SuperElement } from '../lib/super-element'
import { css } from '../lib/template-functions/css'
import { html } from '../lib/template-functions/html'

class AppHome extends SuperElement {
  constructor() {
    super()
  }

  init() {
    const urlInput = this.select('url-input')

    urlInput.on('url-input-submit', (e: CustomEventInit) => {
      console.log(e.detail.value)
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
        padding: 30px 0;
        text-align: center;
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

        <url-input />
      </section>

      <app-footer />
    `
  }
}

customElements.define('app-home', AppHome)
