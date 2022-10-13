import { useCart } from "./Root"

const Cart = () => {
  const { cart, cartFunctions } = useCart()
  const total = cartFunctions.getTotal()
  return (
    <div id="cartpage">
      <div className="bg-mask">
        <h1>Hello I am Cart</h1>
        <p>{JSON.stringify(cart)}</p>
        <h2>Total: {total}</h2>
      </div>
    </div>
  )
}

export default Cart
