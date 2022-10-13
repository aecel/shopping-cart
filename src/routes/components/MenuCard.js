import { useRef } from "react"
import style from "../../styles/MenuCard.css"

const MenuCard = ({
  item,
  addToCart,
  deleteFromCart,
  getItemQuantity,
  changeItemQuantity,
}) => {
  const itemQuantity = getItemQuantity(item.id)
  const inputRef = useRef()

  return (
    <div className="menu-card">
      <div className="menu-text">{item.name}</div>
      <div className="float-buttons">
        {itemQuantity ? (
          <>
            <button
              className="delete-from-cart"
              onClick={() => {
                deleteFromCart(item)
              }}
            >
              -
            </button>
            <input
              className="item-quantity"
              ref={inputRef}
              value={itemQuantity}
              onChange={() => {
                changeItemQuantity(item.id, inputRef.current.value)
              }}
            />
          </>
        ) : (
          ""
        )}
        <button
          className="add-to-cart"
          onClick={() => {
            addToCart(item)
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default MenuCard
