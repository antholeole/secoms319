const request = new XMLHttpRequest();
request.open('GET', '/pets/pets.json');
request.responseType = 'json';
request.send();

request.onload = function () {
    const currentPetName = new URLSearchParams(window.location.search).get('pet');
    const currentPetDesc = request.response[currentPetName];

    populatePage(currentPetName, currentPetDesc);
}

const populatePage = (petName, petDesc) => {
    /// Populate the page
    console.log(petName, petDesc)
}