const request = new XMLHttpRequest();
request.open('GET', "data.json");
request.responseType = 'json';
request.send();

request.onload = function () {
    const pets = request.response;
    const petSlot = document.getElementById('pets');
    Object.keys(pets.pets).forEach(petId => {
        const pet = pets.pets[petId];
        const html = [
            `<pet-card>`,
            `<img slot="img" src="/pets/${pet.id}.png">`,
            `<h3 slot="name">${pet.name}</h3>`,
            `<p slot="body">${pet.desc}</p>`,
            `<a slot="link" href="/pet.html?pet=${pet.id}">See ${pet.name}!</a>`,
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
