import { useRef } from "react"
import { useCart } from "../../routes/Root"
import "../../styles/MenuCard.css"

const MenuCard = ({ item }) => {
  const cartFunctions = useCart().cartFunctions

  const addToCart = cartFunctions.addOneToCart
  const deleteFromCart = cartFunctions.deleteOneFromCart
  const getItemQuantity = cartFunctions.getItemQuantity
  const changeItemQuantity = cartFunctions.changeItemQuantity

  const itemQuantity = getItemQuantity(item.id)
  const inputRef = useRef()

  return (
    <div className="menu-card">
      <div className="menu-img-container">
        <img className="menu-img" src={item.img} alt={item.name} />
      </div>
      <div className="menu-text">
        <div>{item.name}</div>

        <div className="price-circle">${item.price.toFixed(2)}</div>
      </div>
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
