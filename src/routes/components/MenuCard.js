import style from "../../styles/MenuCard.css"

const MenuCard = ({ item }) => {
  return <div className="menu-card" >{item.name}</div>
}

export default MenuCard
