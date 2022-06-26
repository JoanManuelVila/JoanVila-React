import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Cart = () => {
    const {cart, clearCart} = useContext(CartContext)
    return (
        <>
            <h1>Tu carrito tiene:</h1>
            {cart.map(prod => 
                <div>
                    <h3>{prod.name}:</h3>
                    <h4>$ {prod.price} c/u</h4>
                </div>
            )}
        </>
    )
}

export default Cart