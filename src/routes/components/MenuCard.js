import { useRef } from "react"
import { useCart } from "../../routes/Root"
import style from "../../styles/MenuCard.css"

const MenuCard = ({ item }) => {
  const { cart, cartFunctions } = useCart()

  const addToCart = cartFunctions.addOneToCart
  const deleteFromCart = cartFunctions.deleteOneFromCart
  const getItemQuantity = cartFunctions.getItemQuantity
  const changeItemQuantity = cartFunctions.changeItemQuantity

  const itemQuantity = getItemQuantity(item.id)
  const inputRef = useRef()

  return (
    <div className="menu-card">
      <div className="menu-img-container">
        <img className="menu-img" src={item.img} />
      </div>
      <div className="menu-text">
        <div>{item.name}</div>

        <div className="price-circle">${item.price}</div>
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
