fetch('../Assets/charmander.json')
  .then(response => response.json())
  .then(data => init(data))
  .catch(err => console.log(err));

function init(obj) {
    createHeader(obj);
}

function createHeader(obj) {
    const H1_1 = document.createElement('h1')
    const H1 = document.createElement('h1');
    const P = document.createElement('p');


    let name = obj.name;
    let name2 = name.charAt(0).toUpperCase() + name.slice(1)

    if(obj.is_default == true) {
        P.textContent = `${name2} is a default pokemon`;

    }

    H1_1.textContent = 'Pokédex';
    H1.textContent = name2;

    header.appendChild(H1_1);
    section.appendChild(P)
}