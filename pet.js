const request = new XMLHttpRequest();
request.open('GET', "data.json");
request.responseType = 'json';
request.send();

request.onload = function () {
    const currentPetId = new URLSearchParams(window.location.search).get('pet');
    const currentPet = request.response.pets.find(item => item.id === currentPetId);

    populatePage(currentPet.name, currentPet.desc, currentPet.weight);
}

const populatePage = (petName, petDesc, petWgt) => {
    /// Populate the page
    document.getElementById("pet-name").innerHTML = petName;
    document.getElementById("pet-img").src = "/images/" + petName.toLowerCase() + ".png";
    document.getElementById("pet-wgt").innerHTML = petWgt + " lbs";
    document.getElementById("pet-desc").innerHTML = petDesc;
    console.log(petName, petDesc, petWgt)
}