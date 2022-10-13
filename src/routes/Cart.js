import { useCart } from "./Root"

const Cart = () => {
  const cart = useCart()
  return (
    <div id="cartpage">
      <div className="bg-mask">
        <h1>Hello I am Cart</h1>
        <p>{JSON.stringify(cart)}</p>
      </div>
    </div>
  )
}

export default Cart
