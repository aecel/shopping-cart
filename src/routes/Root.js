import { NavLink, Outlet } from "react-router-dom"
import kurowalogo from "../images/kurowa-san-white.svg"
import carticon from "../images/cart.svg"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import menuItems from "../menuItems"

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

const Root = () => {
  const [cart, setCart] = useState([])
  const cartQuantityRef = useRef()

  useEffect(() => {
    cartQuantityRef.current.textContent = `${cart.length}`
  }, [cart])

  const addOneToCart = (item) => {
    let nextCart = [...cart]

    const matchedItem = nextCart.filter((eachItem) => {
      return eachItem.id === item.id
    })

    if (matchedItem.length === 0) {
      nextCart.push(item)
    } else {
      const index = nextCart.indexOf(matchedItem[0])
      nextCart[index].quantity++
    }

    // let itemInCart = false
    // // Check if item exists in cart
    // // If it exists, add 1 to its quantity
    // for (let i = 0; i < nextCart.length; i++) {
    //   if (nextCart[i].id === item.id) {
    //     nextCart[i].quantity = nextCart[i].quantity + 1
    //     itemInCart = true
    //   }
    // }

    // // If item does not exist in cart
    // // Push new item to the cart
    // if (!itemInCart) {
    //   nextCart.push(item)
    // }

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

  useEffect(() => {
    let nextCart = [...cart]
    for (const item of menuItems) {
      nextCart.push(item)
    }
    setCart(nextCart)
    // for (const item of menuItems) {
    //   addOneToCart(item)
    // }
  }, [])

  return (
    <CartContext.Provider value={cart}>
      <div id="root">
        <header>
          <div className="header-left">
            <div className="logo-container">
              <img className="logo" src={kurowalogo} alt="Kurowa-san Logo" />
            </div>
            Kurowa-san
          </div>
          <div className="header-right">
            <NavLink
              to={"/home"}
              id="home"
              className={({ isActive, isPending }) =>
                isActive
                  ? "header-tab chosen-tab"
                  : isPending
                  ? "header-tab"
                  : "header-tab"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/menu"}
              id="menu"
              className={({ isActive, isPending }) =>
                isActive
                  ? "header-tab chosen-tab"
                  : isPending
                  ? "header-tab"
                  : "header-tab"
              }
            >
              Menu
            </NavLink>
            <NavLink
              to={"/contact"}
              id="contact"
              className={({ isActive, isPending }) =>
                isActive
                  ? "header-tab chosen-tab"
                  : isPending
                  ? "header-tab"
                  : "header-tab"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to={"/cart"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "header-tab chosen-tab"
                  : isPending
                  ? "header-tab"
                  : "header-tab"
              }
            >
              Cart
            </NavLink>
            <NavLink to={"/cart"} id="cart">
              <img id="carticon" src={carticon} alt="a cart icon"></img>
            </NavLink>
            <div id="cart-quantity" ref={cartQuantityRef}></div>
          </div>
        </header>
        <Outlet />
        <footer>Copyright © aecel 2022</footer>
      </div>
    </CartContext.Provider>
  )
}

export default Root
