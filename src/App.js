import { useState } from "react"
import uniqueId from "./uniqueId.js"

const App = () => {
  const [cart, setCart] = useState([])

  const sampleItem = {
    id: uniqueId(),
    name: "",
    description: "",
    quantity: 0,
    price: 0,
  }

  const addOneToCart = (item) => {
    let nextCart = [...cart]
    let itemInCart = false

    // Check if item exists in cart
    // If it exists, add 1 to its quantity
    for (let i = 0; i < nextCart.length; i++) {
      if (nextCart[i].id === item.id) {
        nextCart[i].quantity = nextCart[i].quantity + 1
        itemInCart = true
      }
    }

    // If item does not exist in cart
    // Push new item to the cart
    if (!itemInCart) {
      nextCart.push(item)
    }

    setCart(nextCart)
  }

  const deleteOneFromCart = (item) => {
    let nextCart = [...cart]

    // If the quantity is one, delete the item from the cart
    // Else, remove 1 from the quantity
    for (let i = 0; i < nextCart.length; i++) {
      if (nextCart[i].id === item.id) {
        if (nextCart[i].quantity - 1 === 0) {
          nextCart.splice(i, 1)
        } else {
          nextCart[i].quantity = nextCart[i].quantity - 1
        }
      }
    }

    setCart(nextCart)
  }

  const getTotal = () => {
    const totalPrice = cart.reduce((total, item) => {
      const itemCost = item.price * item.quantity
      return total + itemCost
    }, 0)

    return totalPrice
  }

  return (
    <div>
      <h1>Hello im shopping cart mwamwa</h1>
    </div>
  )
}

export default App
