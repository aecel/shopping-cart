import MenuCard from "./components/MenuCard"
import menuItems from "../menuItems"
import Menucss from "../styles/Menu.css"

const Menu = () => {
  return (
    <div id="menupage">
      <div className="bg-mask" id="menu-mask">
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
