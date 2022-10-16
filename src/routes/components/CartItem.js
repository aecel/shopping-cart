import style from "../../styles/CartItem.css"
import { useRef } from "react"
import { useCart } from "../../routes/Root"

const CartItem = ({ item }) => {
  const itemPrice = Math.round(item.quantity * item.price * 100) / 100
  const { cart, cartFunctions } = useCart()

  const addToCart = cartFunctions.addOneToCart
  const deleteFromCart = cartFunctions.deleteOneFromCart
  const getItemQuantity = cartFunctions.getItemQuantity
  const changeItemQuantity = cartFunctions.changeItemQuantity

  const itemQuantity = getItemQuantity(item.id)
  const inputRef = useRef()

  return (
    <div className="cart-item">
      <div className="cart-item-name">{item.name}</div>
      <div
        className="cart-item-quantity"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          className="delete-from-cart"
          onClick={() => {
            deleteFromCart(item)
          }}
          style={{
            height: "20px",
            width: "20px",
            fontSize: "0.8rem",
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
        <button
          className="add-to-cart"
          onClick={() => {
            addToCart(item)
          }}
          style={{
            height: "20px",
            width: "20px",
            fontSize: "0.8rem",
          }}
        >
          +
        </button>
      </div>
      <div className="cart-item-price">$ {itemPrice.toFixed(2)}</div>
    </div>
  )
}

export default CartItem
