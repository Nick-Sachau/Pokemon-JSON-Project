let charizard = `{
  "abilities": [
    {
      "name": "Blaze"
    },
    {
      "name": "Solar Power"
    }
  ],
  "base_experience": 240,
  "height": 17,
  "id": 6,
  "is_default": true,
  "name": "Charizard",
  "order": 7,
  "stats": [
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "HP"
      }
    },
    {
      "base_stat": 84,
      "effort": 0,
      "stat": {
        "name": "Attack"
      }
    },
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "Defense"
      }
    },
    {
      "base_stat": 109,
      "effort": 3,
      "stat": {
        "name": "Special Attack"
      }
    },
    {
      "base_stat": 85,
      "effort": 0,
      "stat": {
        "name": "Special Defense"
      }
    },
    {
      "base_stat": 100,
      "effort": 0,
      "stat": {
        "name": "Speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "Fire"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "Flying"
      }
    }
  ],
  "weight": 905
}`

let header = document.getElementById("header");
let section = document.getElementById("section");

init(charizard);

function init(string) {
  let charizardObj = JSON.parse(charizard);
  createHeader(charizardObj);
  createSection(charizardObj);
}

function createHeader(obj) {
  const H1 = document.createElement("h1");
  H1.textContent = "Pokedex";

  header.appendChild(H1);
}

function createSection(obj) {
  
}
