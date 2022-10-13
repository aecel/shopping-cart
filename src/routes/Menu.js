import MenuCard from "./components/MenuCard"
import { useCart } from "./Root"
import menuItems from "../menuItems"
import Menucss from "../styles/Menu.css"

const Menu = () => {
  const cart = useCart()
  return (
    <div id="menupage">
      <div className="bg-mask">
        <div id="menu-cards">
          {menuItems.map((item) => {
            return <MenuCard item={item} key={item.id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Menu
