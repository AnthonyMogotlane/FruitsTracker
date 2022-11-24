const url = "/api/fruits";
let fruitsList = [];

const getFruits = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFruits(data))
    .catch((err = console.error("Unable to get fruits items", err)));
};

const addFruit = () => {
  const inputAdd = document.querySelector(".fruit-input");
  if (inputAdd.value !== "") {
    const fruit = {
      name: inputAdd.value.trim(),
      count: 1,
    };

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(fruit),
    })
      .then((res) => res.json())
      .then(() => {
        getFruits();
        inputAdd.value = "";
      })
      .catch((err) => console.error("Unable to add fruit.", err));
  }
};

const removeFruit = (name) => {
  if (confirm(`Remove the all ${name}s?`)) {
    fetch(`${url}/${name}`, { method: "DELETE" })
      .then(() => getFruits())
      .catch((err) => console.error("Unable to delete fruit.", err));
  }
};

const searchFruit = () => {
  const name = document.querySelector(".fruit-search").value;
  fetch(`${url}/${name}`)
    .then((res) => res.json())
    .then((data) => displayFruits([data]))
    .catch((err) => console.error("Unable to delete fruit.", err));
};

function displayFruits(data) {
  const fruits = document.querySelector(".fruits");
  fruits.innerHTML = "";
  data.forEach((fruit) => {
    fruits.innerHTML += `
      <tr>
        <td>${fruit.name}</td>
        <td>${fruit.count}</td>
        <td><button class="btn btn-danger" onclick="removeFruit('${fruit.name}')">Remove</button></td>
        <td><button class="btn btn-primary">Edit</button></td>
      </tr>`;
  });

  fruitsList = data;
}
getFruits();
