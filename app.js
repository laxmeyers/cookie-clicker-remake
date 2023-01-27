// stretch challeng to make the alert window pop up
const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})

// SECTION arrays
let info = [
    {
        name: 'click',
        total: 1,
        emoji: "👆"
    },
    {
        name: 'cash',
        total: 0,
        emoji: "🥚"
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
      quantity: 1,
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
    let clickQuantity = 0
    let autoQuantity = 0

    clickUpgrades.forEach(p => {
        clickQuantity += (p.quantity * p.multiplier)
    })
    info[0].total = clickQuantity

    automaticUpgrades.forEach(p => {
        autoQuantity += (p.quantity * p.multiplier)
    })
    info[2].total = autoQuantity

    info.forEach(p => {
        template += `
        <div class="col-2 bg-primary fs-3 rounded-pill right-border">${p.emoji}${p.total}</div>
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
        <div class="col-12 my-2 d-flex justify-content-between align-items-center fs-4 fw-bold text-warning">
        <button onclick="addUpgrade('${u.name}')" class="btn btn-success">${u.name} +${u.multiplier}</button>
        ${info[1].emoji}${u.price}
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
        <div class="col-12 my-2 d-flex justify-content-between align-items-center fs-4 fw-bold text-warning">
        <button onclick="addUpgrade('${a.name}')" class="btn btn-success">${a.name} +${a.multiplier}</button>
         ${info[1].emoji}${a.price}
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

  function addUpgrade(name){

    // console.log(name);
    if (clickUpgrades.find(p => p.name == name)){
        let update = clickUpgrades.find(p => p.name == name)
        if (update.price > info[1].total){
            Toast.fire({ icon: 'warning', title:`Not enough eggs to buy ${update.name}`})
            return
        } 
        update.quantity += 1
        info[1].total -= update.price
        update.price += Math.floor(5 * update.quantity)
        
        drawUpgrades()
        drawInfo()

    }else if(automaticUpgrades.find(p => p.name == name)){
        let update = automaticUpgrades.find(p => p.name == name)
        if (update.price > info[1].total){
            Toast.fire({icon:"warning", title:`Not enough eggs to buy ${update.name}`})
            return
        } 
        update.quantity += 1
        info[1].total -= update.price
        update.price += Math.floor(10 * update.quantity)
        
        drawAuto()
        drawInfo()
    }

  }

  function autoClick(){
    // console.log('hello')
    info[1].total += info[2].total
    drawInfo()
  }

  setInterval(autoClick, 3000)


//   SECTION calling functions
  drawInfo()
  drawAuto()
  drawUpgrades()