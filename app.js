// SECTION arrays
let info = [
    {
        name: 'click',
        total: 1,
        emoji: "👆"
    },
    {
        name: 'cash',
        total: 50000,
        emoji: "$"
    },
    {
        name: 'auto',
        total: 0,
        emoji: "⏲"
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

//   SECTION functions

  function drawInfo(){
    let infoElem = document.getElementById('info')
    let template = ''

    info.forEach(p => {
        template += `
        <div class="col-2 bg-primary">${p.emoji}${p.total}</div>
        `
    })

    infoElem.innerHTML = template
  }

  function drawUpgrades(){
    let clickElem = document.getElementById('click')
    let statsElem = document.getElementById('click-stats')
    let upgrade = ''
    let stats = ''

    clickUpgrades.forEach(u => {
        upgrade += `
        <div class="col-12 my-2 d-flex justify-content-between align-items-center">
        <button onclick="addUpgrade('${u.name}')" class="btn btn-success">${u.name} +${u.multiplier}</button>
         $${u.price}
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
        <div class="col-12 my-2 d-flex justify-content-between align-items-center">
        <button onclick="addUpgrade('${a.name}')" class="btn btn-success">${a.name} +${a.multiplier}</button>
         $${a.price}
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

  function clickPower(){
    let moneyAdd = info[0]
    let currentMoney = info[1]

    currentMoney.total += moneyAdd.total
    drawInfo()
  }

  function addUpgrade(array){
    console.log(array);

    
  }


//   SECTION calling functions
  drawInfo()
  drawAuto()
  drawUpgrades()