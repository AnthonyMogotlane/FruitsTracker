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
      })
      .catch((err) => console.error("Unable to add fruit.", err));
      
      inputAdd.value = "";

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
  if(name.trim() != "") {
    fetch(`${url}/${name}`)
      .then((res) => res.json())
      .then((data) => displayFruits([data]))
      .catch((err) => console.error("Unable to delete fruit.", err));
  }
};

const displayEditForm = (name) => {
    const fruit = fruitsList.find(e => e.name === name);

    document.querySelector('#edit-name').value = fruit.name;
    document.querySelector('#edit-count').value = fruit.count;
    document.querySelector('#editForm').style.display = 'block';
}

const updateItem = () => {
  const name = document.querySelector('#edit-name').value;

  const fruit = {
    name : name.trim(),
    count: parseInt(document.querySelector('#edit-count').value.trim())
  };

  console.log(fruit);

  fetch(`${url}/${name}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fruit)
  })
  .then(() => getFruits())
  .catch(error => console.error('Unable to update item.', error));

  closeInput();

  return false;
}

const closeInput = () => document.querySelector('#editForm').style.display = 'none';


function displayFruits(data) {
  const fruits = document.querySelector(".fruits");
  fruits.innerHTML = "";
  data.forEach((fruit) => {
    fruits.innerHTML += `
      <tr>
        <td>${fruit.name}</td>
        <td>${fruit.count}</td>
        <td><button class="btn btn-danger" onclick="removeFruit('${fruit.name}')">Remove</button></td>
        <td><button class="btn btn-primary" onclick="displayEditForm('${fruit.name}')">Edit</button></td>
      </tr>`;
  });

  fruitsList = data;
  console.log(fruitsList)
}
getFruits();
