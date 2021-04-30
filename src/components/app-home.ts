import './app-title'
import './app-footer'
import './url-input'
import './message-box'
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
      * {
        box-sizing: border-box;
      }

      :host {
        display: grid;
        height: 100%;
        grid-template-rows: 70px auto 60px;
      }

      div {
        padding: 30px 0;
        text-align: center;
      }

      p {
        font-size: 1.2rem;
        color: #676767;
      }

      message-box {
        margin: 20px auto;
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

        <message-box  message="Hi" />
      </section>

      <app-footer />
    `
  }
}

customElements.define('app-home', AppHome)
