const $coffees = document.querySelector(".coffees")

fetch("http://localhost:4000/coffees")
  .then(response => response.json())
  .then(response => {
    response.coffees.map(coffee => {
      const $li = document.createElement("li")
      $li.textContent = coffee.brand
      return $li
    }).forEach($li => {
      $coffees.append($li)
    })
  })
