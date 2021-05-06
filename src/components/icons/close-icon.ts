import { SuperElement } from '../../lib/super-element'
import { html } from '../../lib/template-functions/html'

class CloseIcon extends SuperElement {
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
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `
  }
}

customElements.define('close-icon', CloseIcon)
