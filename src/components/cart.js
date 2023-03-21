
import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../context/cart-context";
import useRazorpay from "react-razorpay";
import "./cart.css"
const Cart = ()=> {
    const {cartData} = useContext(CartContext);
    const total = useRef();
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total)=> {
        const options = {
            key: "rzp_test_gtmQgTXLwlGJKz",
            amount: total*100,
            currency: "INR",
            name: "Game Store",
            description: "Gaming Transaction",
            handler: (res)=> {
                console.log(res);
            },
            prefill: {
                name: "Pranay Balasaheb Kadu",
                email: "pranaykadu680@gmail.com",
                contact: "1646729825"
            
            },
            notes: {
                address: "Home address"
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
        
    }, [RazorPay])
    return (
        <>
            <section>
                <section>
                {cartData.map((cartItem)=> {
                return (
                    <article>
                        <img src={`http://localhost:1337${cartItem?.image?.data?.attributes?.url}`} alt=""/>
                        <article>{cartItem.title}</article>
                        <article>{cartItem.price}</article>
                        <button>Remove from cart</button>
                    </article>
                )
            })}
                </section>
                <section className="cart-bill">
                <article>Billing Process</article>
                  {cartData.map((cart)=> {
                      return <article>
                          <span>{cart.title}</span>
                          <span>{cart.price}</span>
                      </article>
                  })}
                  <article>Total: 1500</article>
                  <button onClick={()=>{razorPayDisplay(1500)}}>Checkout</button>
                </section>
            </section>
           
        </>
    )
}
export default Cart;
