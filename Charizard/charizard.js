fetch('../Assets/charizard.json')
  .then(response => response.json())
  .then(data => init(data))
  .catch(err => console.log(err));

function init(obj) {
  createHeader(obj);
  createSection(obj);
}

function createHeader(obj) {
  const H1 = document.createElement('h1');

  H1.textContent = 'Pokédex'

  header.appendChild(H1)
}

function createSection(obj) {

  const {stats: statistics, ...restOfObject} = obj;

  let types = obj.types

  let abilities = obj.abilities

  const PICTURE = document.createElement('div');
  const NUMBERID = document.createElement('p');
  const IMG = document.createElement('img');
  const TYPE = document.createElement('div');
  const H_W  = document.createElement('div');
  const HEIGHT = document.createElement('div');
  const WEIGHT = document.createElement('div');
  const STATS = document.createElement('div');
  const NAME = document.createElement('h2');
  const H3STATS = document.createElement('h3');
  const STATNAMES = document.createElement('div');
  const UL = document.createElement('ul');
  const PROGRESSCONTAINER = document.createElement('div')
  const ABILITY1 = document.createElement('div')
  const ABILITY2   = document.createElement('div')

  NUMBERID.setAttribute('id', 'numberID');
  PICTURE.setAttribute('id', 'picture');
  IMG.setAttribute('id', 'img');
  IMG.setAttribute('src', '../charizard.png');
  IMG.setAttribute('width', '100%');
  ABILITY1.setAttribute('id','ability1');
  ABILITY2.setAttribute('id','ability2');
  TYPE.setAttribute('id', 'type');
  H_W.setAttribute('id', 'h_W');
  HEIGHT.setAttribute('id', 'height');
  WEIGHT.setAttribute('id', 'weight');
  STATS.setAttribute('id', 'stats');
  NAME.setAttribute('id', 'name');
  H3STATS.setAttribute('id', 'h3Stats');
  STATNAMES.setAttribute('id', 'statNames');
  PROGRESSCONTAINER.setAttribute('id', 'progressContainer');

  NUMBERID.textContent = '#' + obj.id;
  HEIGHT.textContent = 'Height: ' + obj.height;
  WEIGHT.textContent = 'Weight: ' + obj.weight;
  NAME.textContent = obj.name
  H3STATS.textContent = 'Base Stats'
  ABILITY1.textContent = obj.abilities[0].name;
  ABILITY2.textContent = obj.abilities[1].name;

  // goes through all the types and adds it to the div #types

  for(type in types) {

    let tempType = types[type].type;
    const TYPE2 = document.createElement('div');
    TYPE2.setAttribute('id', tempType.name);
    TYPE2.textContent =  tempType.name
    TYPE.appendChild(TYPE2)
  }

  // loop that creates all the li's and br's for the ul

  let statsArray = ['Attack', 'HP', 'Defense', 'Speed', 'SpecialAttack', 'SpecialDefense', 'EXP'];

  for(i in statsArray) {
    let li = document.createElement('li');
    li.textContent = statsArray[i];

    let br = document.createElement('br');
    UL.appendChild(li);
    UL.appendChild(br);
  }

  // loop that creates all of the progress bars
  
  for(i in statsArray) {
    let myProgress = document.createElement('div');
    myProgress.setAttribute('id', statsArray[i]);
    myProgress.setAttribute('class', 'myProgress');
    PROGRESSCONTAINER.appendChild(myProgress);
  }
  
  PICTURE.appendChild(NUMBERID);
  PICTURE.appendChild(IMG);
  PICTURE.appendChild(TYPE);
  PICTURE.appendChild(H_W);
  H_W.appendChild(HEIGHT);
  H_W.appendChild(WEIGHT);
  STATS.appendChild(NAME);
  STATS.appendChild(H3STATS);
  STATS.appendChild(STATNAMES);
  STATS.appendChild(ABILITY1);
  STATS.appendChild(ABILITY2);
  STATNAMES.appendChild(UL);
  STATNAMES.appendChild(PROGRESSCONTAINER)
  section.appendChild(PICTURE);
  section.appendChild(STATS);


  for(let i = 0; i < 6; i++) {
  
    let tempstat = statistics[i].stat;

    console.log(statistics[i])  
    console.log(tempstat.name)
    
    let myBar = document.createElement('div');
    //div
    myBar.setAttribute('id', tempstat.name);
    //div id= "temp"
    myBar.textContent = statistics[i].base_stat + '/100'
    //get div with id 'temp'
    let currentDIV = document.getElementById(`${tempstat.name}`);
    console.log(myBar)
    console.log(currentDIV)
    
    currentDIV.appendChild(myBar)
  }

  let myBAR = document.createElement('div');
  myBAR.setAttribute('id', 'EXP')
  myBAR.textContent = obj.base_experience + '/100'
  let EXP = document.getElementById('EXP')

  EXP.appendChild(myBAR)
}