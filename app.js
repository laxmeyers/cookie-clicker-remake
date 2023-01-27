let clickUpgrades = [
    {
      name: 'vitamins',
      price: 50,
      quantity: 0,
      multiplier: 1
    },
    {
    name: 'larger eggs',
      price: 250,
      quantity: 0,
      multiplier: 1
    }
  ];

  function drawUpgrades(){
    let clickElem = document.getElementById('click')
    let upgrade = ''

    clickUpgrades.forEach(u => {
        upgrade += `
        <div class="col-12 my-2">
        <span><button onclick="addClickUpgrade("${u.name}")" class="btn btn-success">${u.name}</button>
         $${u.price}</span>
         </div>
         `
    })

    clickElem.innerHTML = upgrade
  }

  function 

  drawUpgrades()