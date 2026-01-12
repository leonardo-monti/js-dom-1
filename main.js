const lampadina = document.getElementById(`lampadina`)

const bottone = document.getElementById(`btn`)

bottone.addEventListener(`click`, function () {

    if (lampadina.src.includes(`white`)) {
        lampadina.src = `./img/yellow_lamp.png`;
        bottone.textContent = `Spegni`;
    } else {
        lampadina.src = `./img/white_lamp.png`;
        bottone.textContent = `Accendi`
    }
}) 