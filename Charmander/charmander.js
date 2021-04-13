fetch('../Assets/charmander.json')
  .then(response => response.json())
  .then(data => init(data))
  .catch(err => console.log(err));

function init(obj) {
    createHeader(obj);
}

function createHeader(obj) {
    // const H1 = document.createElement('h1');

    // H1.textContent = 'Pokédex';

    // header.appendChild(H1)
}

function createSection(obj) {

}
// let stats = ['Attack', 'Health', 'Defence', 'Speed', 'Exp']

// for(i in whatever) {
//     let li = document.createElement(li);

//     li.textContent = stats[i]

//     ul.appendChil(li)
// }