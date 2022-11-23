
const fruits = document.querySelector(".fruits");

fetch('/api/fruits')
    .then(r => r.json())
    .then(r => {
        // console.log(r);


        r.forEach(fruit => {
            fruits.innerHTML += `<li>${fruit.count}x ${fruit.name} </li>`    
        });

    })