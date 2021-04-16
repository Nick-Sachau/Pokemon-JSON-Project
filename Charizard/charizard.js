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

let charObj = JSON.parse(charizard)
let header = document.getElementById("header")
let section = document.getElementById("section")
let main = document.getElementById("main")

init(charizard)

function init(charizard){
    let charObj = JSON.parse(charizard)
    createMain(charObj)
    createSection(charObj)
}

function createMain(obj){
  ARTICLE_name = document.createElement('article')
  ARTICLE_name.setAttribute('id', 'name')
  H2_name = document.createElement('h2')
  DIV_name = document.createElement('div')
  H2_name.textContent = charObj['name']
  img_char = document.createElement('img')
  img_char.setAttribute('src', 'charmeleon.jpg')
  img_char.setAttribute('width', '90%')
  DIV_name.appendChild(img_char)
  ARTICLE_name.appendChild(H2_name)
  ARTICLE_name.appendChild(DIV_name)
  main.appendChild(ARTICLE_name)
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

// ID
    ARTICLE_id = document.createElement('article')
    ARTICLE_id.setAttribute('id', 'id')
    H2_id = document.createElement('h2')
    DIV_id = document.createElement('div')
    H2_id.textContent = 'ID'
    DIV_id.textContent = charObj['id']
    ARTICLE_id.appendChild(H2_id)
    ARTICLE_id.appendChild(DIV_id)
// ID

// DEFAULT
    ARTICLE_def = document.createElement("article")
    ARTICLE_def.setAttribute('id', 'default')
    H2_def = document.createElement('h2')
    DIV_def = document.createElement('div')
    H2_def.textContent = 'Default?'
    DIV_def.textContent = charObj['is_default']
    ARTICLE_def.appendChild(H2_def)
    ARTICLE_def.appendChild(DIV_def)
// DEFAULT

// STATS
  ARTICLE_stats = document.createElement('article')
  ARTICLE_stats.setAttribute('id', 'stats')
  H2_stats = document.createElement('h2')
  DIV_stats = document.createElement('div')
  H2_stats.textContent = 'Base Stats'
  
  P1_stats = document.createElement('p')
  P1_stats.textContent = `${charObj['stats'][0]['stat']['name']}: ${charObj['stats'][0]['base_stat']}`
  DIV_stats.appendChild(P1_stats)
  
  P2_stats = document.createElement('p')
  P2_stats.textContent = `${charObj['stats'][1]['stat']['name']}: ${charObj['stats'][1]['base_stat']}`
  DIV_stats.appendChild(P2_stats)

  P3_stats = document.createElement('p')
  P3_stats.textContent = `${charObj['stats'][2]['stat']['name']}: ${charObj['stats'][2]['base_stat']}`
  DIV_stats.appendChild(P3_stats)

  P4_stats = document.createElement('p')
  P4_stats.textContent = `${charObj['stats'][3]['stat']['name']}: ${charObj['stats'][3]['base_stat']}`
  DIV_stats.appendChild(P4_stats)

  P5_stats = document.createElement('p')
  P5_stats.textContent = `${charObj['stats'][4]['stat']['name']}: ${charObj['stats'][4]['base_stat']}`
  DIV_stats.appendChild(P5_stats)

  P6_stats = document.createElement('p')
  P6_stats.textContent = `${charObj['stats'][5]['stat']['name']}: ${charObj['stats'][5]['base_stat']}`
  DIV_stats.appendChild(P6_stats)
  ARTICLE_stats.appendChild(H2_stats)
  ARTICLE_stats.appendChild(DIV_stats)
// STATS    

// TYPE
    ARTICLE_type = document.createElement('article')
    ARTICLE_type.setAttribute('id', 'type')
    H2_type = document.createElement('h2')
    DIV_type = document.createElement('div')
    DIV_type.textContent = `Slot ${charObj['types'][0]['slot']} : ${charObj['types'][0]['type']['name']}`
    H2_type.textContent = 'Type'
    ARTICLE_type.appendChild(H2_type)
    ARTICLE_type.appendChild(DIV_type)
// TYPE

// WEIGHT
    ARTICLE_weight = document.createElement('article')
    ARTICLE_weight.setAttribute('id', 'weight')
    H2_weight = document.createElement('h2')
    DIV_weight = document.createElement('div')
    H2_weight.textContent = 'Weight'
    DIV_weight.textContent = `${charObj['weight']}`
    ARTICLE_weight.appendChild(H2_weight)
    ARTICLE_weight.appendChild(DIV_weight)
// WEIGHT
    section.appendChild(ARTICLE_stats)
    section.appendChild(ARTICLE_abilities)
    section.appendChild(ARTICLE_type)
    section.appendChild(ARTICLE_basexp)
    section.appendChild(ARTICLE_weight)
    section.appendChild(ARTICLE_height)
    section.appendChild(ARTICLE_id)
    section.appendChild(ARTICLE_def)
    
    
    

}

let {name: n, stats: newStats, abilities: abils, id: id, ...others} = charObj

console.log(name)