
import { useState , createContext, useEffect } from 'react'

function  getCartFromLocalStorage () {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart'))
    : []
  }

export const CartContext = createContext();

export function CartProvider ( {children} ) {
    const [ cart , setCart ] = useState(getCartFromLocalStorage());
    
    function sendCart ( id , product ) {
        
        const item = [...cart].find(item  => item.id === id)
         if(item) {
            const newCart = [...cart].map(item => {
                return item.id === id
                ? { ...item, amount: item.amount + 1 }
                : { ...item };
              });
              setCart(newCart)          
          return ;
        } else {
          const newItem = { ...product , amount: 1}
          const newCart = [...cart, newItem ] ;
          setCart(newCart)
        }        
        
        localStorage.setItem('cart' , JSON.stringify(cart))
    }

    useEffect(()=>{
        localStorage.setItem('cart' , JSON.stringify(cart))    
      },[cart])

    return (
        <CartContext.Provider value={{ cart , sendCart }}>
            { children }
        </CartContext.Provider>
    )
}

