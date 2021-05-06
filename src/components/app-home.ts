import './app-title'
import './app-footer'
import './url-input'
import { MessageBox } from './message-box'
import { SuperElement } from '../lib/super-element'
import { css } from '../lib/template-functions/css'
import { html } from '../lib/template-functions/html'
import { createShortenedUrl } from '../use-cases/create-shortened-url'
import { IUrlInput } from './url-input'

class AppHome extends SuperElement {
  constructor() {
    super()
  }

  init() {
    const urlInput = this.select<IUrlInput>('url-input')
    const section = this.select('section')

    urlInput.on('url-input-submit', async (e: CustomEventInit) => {
      urlInput.disable()
      const result = await createShortenedUrl(e.detail.value)
      const messageBox = new MessageBox()
      
      if(!result.ok) {
        messageBox.className = 'error'
      }

      messageBox.message = result.data
      
      const existedMessageBox = this.select('message-box')
      
      urlInput.enable()
      if(existedMessageBox) {
        return section.replaceChild(messageBox, existedMessageBox)
      }
        
      return section.appendChild(messageBox)
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
        margin: auto;
        margin-top: 35px;
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
