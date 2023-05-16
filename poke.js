const body = document.querySelector("body");
body.style.backgroundColor = "cyan";
body.style.textAlign = "center";

const root = document.querySelector("#root");
console.log(root);
root.style.display = "grid";
root.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";

async function fetchData() {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");

  for (let pokemon of data.results) {
    const response = await axios.get(pokemon.url);
    console.log(response.data);

    const card = document.createElement("div");
    card.classList.add = "box";
    card.style.fontFamily = "calibri";
    card.style.fontStyle = "Italic";
    card.style.fontSize = "15px";
    card.style.fontWeight = "10px";
    card.style.backgroundColor = "lightgray";
    card.style.margin = "30px";
    card.style.boxShadow = "3px 3px 20px 5px lavender";
    card.style.borderRadius = "20px";

    const img = document.createElement("img");
    img.src = response.data.sprites.other.home.front_default;
    img.style.width = "150px";
    console.log(img);

    const h1 = document.createElement("h1");
    h1.innerText = response.data.name;
    h1.style.fontSize = "20px";
    h1.style.fontFamily = "arial";
    h1.style.color = "darkcyan";
    console.log(h1);

    const p1 = document.createElement("p");
    p1.innerText = `Height: ${response.data.height} m `;
    console.log(p1);

    const p2 = document.createElement("p");
    p2.innerText = `Type:${response.data.types[0].type.name}`;
    console.log(p2);

    const p3 = document.createElement("p");
    p3.innerText = `Moves: ${response.data.moves[0].move.name} , ${response.data.moves[1].move.name} , ${response.data.moves[2].move.name} `;
    console.log(p3);

    const p4 = document.createElement("p");
    p4.innerText = `Ability: ${response.data.abilities[0].ability.name} `;
    console.log(p4);

    card.append(img, h1, p1, p2, p3, p4);
    root.append(card);
  }
}
fetchData();
