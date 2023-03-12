const request = new XMLHttpRequest();
request.open('GET', "/pets/pets.json");
request.responseType = 'json';
request.send();

request.onload = function () {
    const pets = request.response;
    const petSlot = document.getElementById('pets');
    Object.keys(pets).forEach(petName => {
        const html = [
            `<pet-card>`,
            `<img slot="img" src="/pets/${petName}.png">`,
            `<h3 slot="name">${petName}</h3>`,
            `<p slot="body">${pets[petName]}</p>`,
            `<a slot="link" href="/pet.html?pet=${petName}">See ${petName}!</a>`,
            `</pet-card>`
        ].join('');

        petSlot.innerHTML += html;
    });
}

customElements.define(
    "pet-card",
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById("pet-card");
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
      }
    }
  );
