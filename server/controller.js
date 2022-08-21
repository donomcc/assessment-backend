const monsters = require("../server/db.json");

let id = 3;

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A faithful friend is a strong defense.",
      "A fresh start will put you on your way.",
      "Adventure can be real happiness.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  getFood: (req, res) => {
    const foods = ["Pizza", "Burgers", "Spaghetti"];

    let randomIndex = Math.floor(Math.random() * foods.length);
    let randomFoods = foods[randomIndex];

    res.status(200).send(randomFoods);
  },

  // MONSTERS

  getMonsters: (req, res) => {
    res.status(200).send(monsters);
  },

  createMonster: (req, res) => {
    id++;
    const { name } = req.body;
    const { slayerlvl } = req.body;
    const { imageURL } = req.body;
    const monster = {
      id: id,
      name: name,
      slayerlvl: slayerlvl,
      imageURL: imageURL,
    };
    monsters.push(monster);
    res.status(200).send(monsters);
  },

  deleteMonster: (req, res) => {
    const { id } = req.params;
    const index = monsters.findIndex((element) => {
      return element.id === +id;
    });
    monsters.splice(index, 1);
    res.status(200).send(monsters);
  },
};
