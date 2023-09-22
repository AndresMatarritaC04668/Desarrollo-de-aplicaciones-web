
customElements.define('mi-tarjeta',
    class extends HTMLElement {
        constructor() {
            super();

            const template = document.getElementById('mi-tarjeta');
            const templateContent = template.content;

            this.attachShadow({ mode: 'open' }).appendChild(
                templateContent.cloneNode(true)
            );
        }
    }
);

