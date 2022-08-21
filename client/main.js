const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const foodBtn = document.getElementById("foodButton");
const monsterContainer = document.querySelector("#monster-section");
const baseURL = `http://localhost:4000/api/monsters`;
const form = document.querySelector("form");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFood = () => {
  axios.get("http://localhost:4000/api/foods/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

// const errCallback = (err) => console.log(err.response.data);

const monstersCallback = ({ data: monsters }) => displayMonsters(monsters);

const getAllMonsters = () =>
  axios.get("http://localhost:4000/api/monsters/").then(monstersCallback);

const createMonster = (body) =>
  axios.post(baseURL, body).then(monstersCallback);

const deleteMonster = (id) =>
  axios.delete(`${baseURL}/${id}`).then(monstersCallback);

function submitHandler(e) {
  e.preventDefault();

  let name = document.querySelector("#name");
  let slayerlvl = document.querySelector("#slayerlvl");
  let imageURL = document.querySelector("#img");

  let bodyObj = {
    name: name.value,
    slayerlvl: slayerlvl.value,
    imageURL: imageURL.value,
  };

  createMonster(bodyObj);

  name.value = "";
  slayerlvl.value = "";
  imageURL.value = "";
}

function createMonsterCard(monster) {
  const monsterCard = document.createElement("div");
  monsterCard.classList.add("monster-card");

  monsterCard.innerHTML = `<img alt='monster cover' src=${monster.imageURL} class="monster-cover"/>
  <p class="monster-name">${monster.name}</p>
  <p class="monster-level">Slayer level required: ${monster.slayerlvl}</p>
  </div>
  <button onclick="deleteMonster(${monster.id})">delete</button>
  `;

  monsterContainer.appendChild(monsterCard);
}

function displayMonsters(arr) {
  monsterContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createMonsterCard(arr[i]);
  }
}

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
foodBtn.addEventListener("click", getFood);

form.addEventListener("submit", submitHandler);

getAllMonsters();
