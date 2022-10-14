const importAll = (r) => {
  return r.keys().map(r)
}

const menuImages = importAll(
  require.context("./images/menu/", false, /\.(png|jpe?g|svg)$/)
)

const croissant = {
  id: window.crypto.randomUUID(),
  name: "Kurowa-san",
  quantity: 1,
  price: 1,
  img: menuImages[5],
}

const croisandwich = {
  id: window.crypto.randomUUID(),
  name: "Kurowa-sandwich",
  quantity: 1,
  price: 1.4,
  img: menuImages[2],
}

const strawberryCroissant = {
  id: window.crypto.randomUUID(),
  name: "Strawberry Kurowa-san",
  quantity: 1,
  price: 1.2,
  img: menuImages[8],
}

const painAuChocolat = {
  id: window.crypto.randomUUID(),
  name: "Pain Au Chocolat",
  quantity: 1,
  price: 1.2,
  img: menuImages[7],
}

const croissantTray = {
  id: window.crypto.randomUUID(),
  name: "Kurowa-san Party",
  quantity: 1,
  price: 4,
  img: menuImages[9],
}

const melonpan = {
  id: window.crypto.randomUUID(),
  name: "Melon-san",
  quantity: 1,
  price: 1,
  img: menuImages[6],
}

const dorayaki = {
  id: window.crypto.randomUUID(),
  name: "Dorayaki",
  quantity: 1,
  price: 1,
  img: menuImages[4],
}

const curryBread = {
  id: window.crypto.randomUUID(),
  name: "Curry Bread",
  quantity: 1,
  price: 1,
  img: menuImages[3],
}

const baguette = {
  id: window.crypto.randomUUID(),
  name: "Baguette",
  quantity: 1,
  price: 1,
  img: menuImages[1],
}

const bagel = {
  id: window.crypto.randomUUID(),
  name: "Bagel",
  quantity: 1,
  price: 1,
  img: menuImages[0],
}

const menuItems = [
  croissant,
  croisandwich,
  strawberryCroissant,
  painAuChocolat,
  croissantTray,
  melonpan,
  dorayaki,
  curryBread,
  baguette,
  bagel,
]

// console.log(menuItems)

export default menuItems
