import style from "../../styles/CartItem.css"

const CartItem = ({ item }) => {
  const itemPrice = Math.round(item.quantity * item.price * 100) / 100

  return (
    <div className="cart-item">
      <div className="cart-item-name">{item.name}</div>
      <div className="cart-item-quantity">{item.quantity}</div>
      <div className="cart-item-price">$ {itemPrice}</div>
    </div>
  )
}

export default CartItem
