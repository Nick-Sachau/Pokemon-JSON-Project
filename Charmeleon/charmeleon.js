let charmeleon = `{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 142,
    "height": 11,
    "id": 5,
    "is_default": true,
    "name": "charmeleon",
    "order": 6,
    "stats": [
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 64,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      }
    ],
    "weight": 190
  }`
  let charObj = JSON.parse(charmeleon)
let header = document.getElementById("header")
let section = document.getElementById("section")

init(charmeleon)

function init(charmeleon){
    let charObj = JSON.parse(charmeleon)
    // createHeader(charObj)
    createSection(charObj)
}

function createSection(obj){
    
// ABILITIES
    const ABILITIES = charObj["abilities"]
    const ARTICLE_abilities = document.createElement("article")
    const H2_abilities = document.createElement("h2")
    const DIV_abilities = document.createElement("div")
    ARTICLE_abilities.setAttribute('id', 'abilities')
    H2_abilities.textContent = "Abilities"
    for(i in ABILITIES){
        const LI_abilities = document.createElement("li")
        LI_abilities.textContent = ABILITIES[i]["name"]
        DIV_abilities.appendChild(LI_abilities)
    }
    ARTICLE_abilities.appendChild(H2_abilities)
    ARTICLE_abilities.appendChild(DIV_abilities)
// ABILITIES

// BASE EXPERIENCE
    ARTICLE_basexp = document.createElement('article')
    ARTICLE_basexp.setAttribute('id', 'basexp')
    H2_basexp = document.createElement("h2")
    DIV_basexp = document.createElement("div")
    H2_basexp.textContent = "Base Experience"
    DIV_basexp.textContent = charObj["base_experience"]
    ARTICLE_basexp.appendChild(H2_basexp)
    ARTICLE_basexp.appendChild(DIV_basexp)
// BASE EXPERIENCE

// HEIGHT
    ARTICLE_height = document.createElement('article')
    ARTICLE_height.setAttribute('id', 'height')
    H2_height = document.createElement('h2')
    DIV_height = document.createElement('div')
    H2_height.textContent = 'Height'
    DIV_height.textContent = `${charObj["height"] }`
    ARTICLE_height.appendChild(H2_height)
    ARTICLE_height.appendChild(DIV_height)
// HEIGHT

    
    section.appendChild(ARTICLE_abilities)
    section.appendChild(ARTICLE_basexp)
    section.appendChild(ARTICLE_height)

}
