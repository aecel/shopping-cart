import MenuCard from "./components/MenuCard"
import { useCart } from "./Root"
import menuItems from "../menuItems"
import Menucss from "../styles/Menu.css"

const Menu = () => {
  const { cart, cartFunctions } = useCart()

  const addToCart = cartFunctions.addOneToCart
  const deleteFromCart = cartFunctions.deleteOneFromCart
  const getItemQuantity = cartFunctions.getItemQuantity
  const changeItemQuantity = cartFunctions.changeItemQuantity
  return (
    <div id="menupage">
      <div className="bg-mask">
        <div id="menu-cards">
          {menuItems.map((item) => {
            return (
              <MenuCard
                item={item}
                key={item.id}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
                getItemQuantity={getItemQuantity}
                changeItemQuantity={changeItemQuantity}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Menu
