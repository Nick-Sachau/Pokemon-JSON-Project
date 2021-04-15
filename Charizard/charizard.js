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
  let charizardObj = JSON.parse(string);
  createHeader(charizardObj);
  createSection(charizardObj);
}

function createHeader(obj) {
  const H1 = document.createElement("h1");
  H1.textContent = "Pokedex";

  header.appendChild(H1);
}

function createSection(obj) {
  const {abilities, stats: statistics, types, ...restOfObject} = obj;

  let statsArray = ['Attack', 'HP', 'Defense', 'Speed', 'Special Attack', 'Special Defense', 'EXP']

  let UL = document.createElement("ul");
  let STATS = document.createElement("div");

  STATS.setAttribute("id", "stats");

  let statNames = document.createElement("div");
  statNames.setAttribute("id", "statNames");

  for (i in statsArray) {
    let li = document.createElement("li");
    li.textContent = statsArray[i];
    let br = document.createElement("br");
    UL.appendChild(br);
    UL.appendChild(li);
  }

  statNames.appendChild(UL);
  STATS.appendChild(statNames);

  section.appendChild(STATS)


  // divs for progress bars

  let progressContainer = document.createElement("div");
  progressContainer.setAttribute("id", "progressContainer");
  for (i of statsArray) {
    progressContainer.innerHTML += `<div id="${[i]}"></div>`;
  }
  
  section.appendChild(progressContainer)
  


  for (i of statistics) {
    let currentDIV = document.getElementById(`${i.stat.name}`);
    console.log(i.base_stat)
    currentDIV.textContent = i.base_stat
  }

}

