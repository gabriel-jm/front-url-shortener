export interface ShadowMode {
  mode: 'open' | 'closed'
}

export type onFunction = (
  eventType: string,
  listener: EventListener | EventListenerObject,
  options?: AddEventListenerOptions
) => void

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

    if(this.render) {
      this.layout = {
        template: this.render(),
        style: this.cssStyle()
      }
    }

    this.init && this.init()
  }

  on: onFunction = (eventType, listener, options) => {
    this.addEventListener(eventType, listener, options)
  }

  select<T extends HTMLElement>(query: string) {
    const element = this.root.querySelector(query) as T & { on: onFunction }
    element.on = (eventType, listener, options) => {
      element.addEventListener(eventType, listener, options)
    }

    return element
  }

  init() {}

  cssStyle() {
    return ''
  }

  render() {
    return ''
  }
}
