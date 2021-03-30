class AppHome extends HTMLElement {
  constructor() {
    super()

    this.innerHTML = 'App HOME!!!'
  }
}

customElements.define('app-home', AppHome)
