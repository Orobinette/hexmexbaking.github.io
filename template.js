// create an HTML template element
const template = document.createElement('template')

/*
template.innerHTML = `
<nav>
    <div>
        <img src="./assets/logo.png" alt="logo">
    </div>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
`
*/
// create a navBar class, and clone the content of the template into it
class navBar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
// define a custom element called 'nav-bar' using the navBar class
customElements.define('nav-bar', navBar)

// Styling a custom element
template.innerHTML = `
<style>
.navbar {
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
}

.navbar__logo {
    height: 100%;
}

.brand {
    height: 100%;
    object-fit: contain;
}

.navlink__container {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: auto;
}

.navlink {
    list-style: none;
    font-size: 1.6rem;
}

.navlink a {
    text-decoration: none;
    color: inherit;
}
</style>
<nav class="navbar">
    <div class="navbar__logo">
        <img src="./assets/logo.png" class="brand" alt="logo">
    </div>
    <ul class="navlink__container">
        <li class="navlink"><a href="/">Home</a></li>
        <li class="navlink"><a href="/about">About</a></li>
        <li class="navlink"><a href="/services">Services</a></li>
        <li class="navlink"><a href="/contact">Contact</a></li>
    </ul>

    <slot name="auth">
        <button class="primary-btn">Login</button>
    </slot
</nav>
`