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
      nextCart[index].quantity = nextCart[index].quantity + 1
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

    return Math.round(totalPrice * 100) / 100
  }

  const getItemQuantity = (id) => {
    const matchedItem = cart.filter((item) => {
      return item.id === id
    })

    if (matchedItem.length === 0) {
      return 0
    } else {
      return matchedItem[0].quantity
    }
  }

  const changeItemQuantity = (id, value) => {
    let nextCart = [...cart]
    const matchedItem = nextCart.filter((item) => {
      return item.id === id
    })

    const index = nextCart.indexOf(matchedItem[0])

    if (matchedItem.length === 0) {
      return null
    } else if (value === "0") {
      nextCart[index].quantity = 1
      nextCart.splice(index, 1)
      setCart(nextCart)
    } else if (Number.isInteger(Number(value)) && Number(value) >= 0) {
      nextCart[index].quantity = Number(value)
      setCart(nextCart)
    }
  }

  const cartFunctions = {
    addOneToCart,
    deleteOneFromCart,
    getTotal,
    getItemQuantity,
    changeItemQuantity,
  }

  return (
    <CartContext.Provider value={{ cart: cart, cartFunctions: cartFunctions }}>
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
