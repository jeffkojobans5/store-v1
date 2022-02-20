
import { useState , createContext, useEffect } from 'react'

function  getCartFromLocalStorage () {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart'))
    : []
  }

export const CartContext = createContext();

export function CartProvider ( {children} ) {
    const [ cart , setCart ] = useState(getCartFromLocalStorage());
    const [counter , setCounter] = useState(1)
    

    function decrease () {
        setCounter((counter)=>{
            if(counter === 1) {
                return counter = 1
            }
            return counter = counter - 1
        })
    }

    function increase (product) {
        setCounter((counter)=>{
            if(counter >= product.stock) {
                return counter = product.stock
            }
            return counter = counter + 1
        })
    }


    function sendCart ( id , product ) {
        
        const item = [...cart].find(item  => item.id === id)
         if(item) {
            const newCart = [...cart].map(item => {

                let finalCounter ;
                if(item.amount + counter > item.stock) {
                    finalCounter = item.stock
                } else {
                    finalCounter = item.amount + counter
                }
                
                return item.id === id
                ? { ...item, amount: finalCounter }
                : { ...item };
              });
              setCart(newCart)          
          return ;
        } else {
          const newItem = { ...product , amount: counter}
          const newCart = [...cart, newItem ] ;
          setCart(newCart)
        }        
        
        localStorage.setItem('cart' , JSON.stringify(cart))
    }

    useEffect(()=>{
        localStorage.setItem('cart' , JSON.stringify(cart))    
      },[cart])

    return (
        <CartContext.Provider value={{ cart , sendCart , decrease , increase , counter }}>
            { children }
        </CartContext.Provider>
    )
}

