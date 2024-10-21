// json file read
import champions from "./champions.json" with { type: "json" };

// random-pick-code
const pickBtn = document.getElementById('pick-btn');
const championName = document.getElementById('champion-name');
const championImage = document.getElementById('champion-image');
const style = document.getElementById('style');
const damage = document.getElementById('damage');
const comboTime = document.getElementById('combo-time');
const difficulty = document.getElementById('difficulty');
const etc = document.getElementById('etc');

let temp = -1;
function pickChampion() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * champions.length);
    } while (randomIndex === temp);

    temp = randomIndex

    const pickedChampion = champions[randomIndex];

    championName.textContent = pickedChampion.name;
    championImage.src = pickedChampion.image;
    style.textContent = pickedChampion.info.style;
    damage.textContent = pickedChampion.info.damage;
    comboTime.textContent = pickedChampion.info.comboTime;
    difficulty.textContent = pickedChampion.info.difficulty;
    etc.textContent = pickedChampion.info.etc;
}

pickBtn.addEventListener('click', pickChampion);
