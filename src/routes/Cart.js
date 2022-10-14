import { useCart } from "./Root"
import style from "../styles/Cart.css"
import CartItem from "./components/CartItem"

const Cart = () => {
  const { cart, cartFunctions } = useCart()
  const total = cartFunctions.getTotal()
  return (
    <div id="cartpage">
      <div className="bg-mask" id="cart-mask">
        <div id="checkout-summary">
          <div id="checkout-heading">
            <div id="checkout-heading-title">Item</div>
            <div style={{ width: "60px", textAlign: "center" }}>Quantity</div>
            <div style={{ width: "40px"}}>Price</div>
          </div>
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />
          })}
        </div>
        <h2>Total: $ {total.toFixed(2)}</h2>
        <button id="checkout-button">Checkout</button>
      </div>
    </div>
  )
}

export default Cart
