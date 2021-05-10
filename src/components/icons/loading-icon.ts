import { SuperElement } from '../../lib/super-element'
import { css } from '../../lib/template-functions/css'
import { html } from '../../lib/template-functions/html'

export class LoadingIcon extends SuperElement {
  cssStyle() {
    return css`
      svg {
        animation: spin 1.2s infinite linear;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }
    `
  }

  render() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="24"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    `
  }
}

customElements.define('loading-icon', LoadingIcon)
