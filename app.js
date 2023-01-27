let clickPower = [
    {
        name: 'click',
        power: 1,
    },
    {
        name: 'auto',
        power: 0
    }
]

let clickUpgrades = [
    {
      name: 'vitamins',
      price: 5,
      quantity: 0,
      multiplier: 1
    },
    {
    name: 'larger eggs',
      price: 50,
      quantity: 0,
      multiplier: 5
    }
  ];

  let automaticUpgrades = [
    {
      name: 'egg dropper',
      price: 500,
      quantity: 0,
      multiplier: 15
    },
    {
        name: 'neighbor',
        price: 1500,
        quantity: 0,
        multiplier: 50
    }
  ];

  function drawUpgrades(){
    let clickElem = document.getElementById('click')
    let statsElem = document.getElementById('click-stats')
    let upgrade = ''
    let stats = ''

    clickUpgrades.forEach(u => {
        upgrade += `
        <div class="col-12 my-2">
        <span><button onclick="addClickUpgrade("${u.name}")" class="btn btn-success">${u.name}</button>
         $${u.price}</span>
         </div>
         `

         stats += `
         <div class="d-flex justify-content-around fw-semibold fs-5">
         <p class="background px-2 text-light">${u.quantity}</p>
         <div><p>=======></p></div>
         <p class="text-light background px-2">${u.quantity * u.multiplier}</p>
         </div>`
    })

    clickElem.innerHTML = upgrade
    statsElem.innerHTML = stats
  }

  function drawAuto(){
    let autoElem = document.getElementById('auto')
    let statsElem = document.getElementById('auto-stats')
    let auto = ''
    let autoStats = ''

    automaticUpgrades.forEach(a => {
        auto += `
        <div class="col-12 my-2">
        <span><button onclick="addClickUpgrade("${a.name}")" class="btn btn-success">${a.name}</button>
         $${a.price}</span>
         </div>
         `

         autoStats += `
         <div class="d-flex justify-content-around fw-semibold fs-5">
         <p class="background px-2 text-light">${a.quantity}</p>
         <div><p>=======></p></div>
         <p class="text-light background px-2">${a.quantity * a.multiplier}</p>
         </div>`
    })

    autoElem.innerHTML = auto
    statsElem.innerHTML = autoStats
  }

  drawAuto()
  drawUpgrades()