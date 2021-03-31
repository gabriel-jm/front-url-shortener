export interface ShadowMode {
  mode: 'open' | 'closed'
}

export interface SelectedElement extends Element {
  on(
    eventType: string,
    listener: EventListener | EventListenerObject,
    options?: EventListenerOptions
  ): void
}

export interface ElementLayoutOptions {
  template: string
  style: string
}

export class SuperElement extends HTMLElement {
  get root () {
    return this.shadowRoot ?? this
  }

  set layout({ template = '', style = '' }: ElementLayoutOptions) {
    this.root.innerHTML = (
      `${style && `<style>${style}</style>`}${template}`
    )
  }

  constructor ({ mode }: ShadowMode  = { mode: 'open' }) {
    super()

    this.attachShadow({ mode })

    if(this.render)
      this.root.innerHTML = (this.cssStyle
        ? `<style>${this.cssStyle()}</style>`
        : ''
      ) + this.render()
  }

  on(
    eventType: string,
    listener: EventListener | EventListenerObject,
    options?: EventListenerOptions
  ) {
    this.addEventListener(eventType, listener, options)
  }

  select (query: string) {
    const element = this.root.querySelector(query) as SelectedElement
    element.on = (eventType, listener, options) => {
      element.addEventListener(eventType, listener, options)
    }

    return element
  }

  cssStyle() {
    return ''
  }

  render() {
    return ''
  }
}
