
import { useState , createContext, useEffect } from 'react'

function  getCartFromLocalStorage () {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart'))
    : []
  }

export const CartContext = createContext();

export function CartProvider ( {children} ) {
    const [cart , setCart] = useState(getCartFromLocalStorage());
    const [counter , setCounter] = useState(1)
    const [example , setExample] = useState(1)
    
    function increaseCart (cartItem) {
        const item = [...cart].find(item  => item.id === cartItem.id)
         if(item) {
            const newCart = [...cart].map(item => {
                let finalCounter ;
                if(item.amount >= item.stock) {
                    finalCounter = item.stock
                } else {
                    finalCounter = item.amount + 1
                }                
                return item.id === cartItem.id
                ? { ...item, amount: finalCounter }
                : { ...item };
              });
              setCart(newCart)          
          return ;
        } 
    }

    function decreaseCart (cartItem) {
        setExample(example + 1);

        const item = [...cart].find(item  => item.id === cartItem.id)
        if(item) {
            const newCart = [...cart].map(item => {

                let finalCounter ;
                if(item.amount <= 1) {
                    finalCounter = 1
                } else {
                    finalCounter = item.amount - 1
                }

                return item.id === cartItem.id
                ? { ...item, amount: finalCounter }
                : { ...item };
              });
              setCart(newCart)          
              return ;
        } 

    }    

    
    function increase (product) {
        setCounter((counter)=>{
            if(counter >= product.stock) {
                return counter = product.stock
            }
            return counter = counter + 1
        })
    }
    
    function decrease () {
        setCounter((counter)=>{
            if(counter === 1) {
                return counter = 1
            }
            return counter = counter - 1
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
              setCounter(1)
          return ;
        } else {
          const newItem = { ...product , amount: counter}
          const newCart = [...cart, newItem ] ;
          setCart(newCart)
          setCounter(1)
        }        
        localStorage.setItem('cart' , JSON.stringify(cart))
    }

    function delPro (item){
        let remove = [...cart].filter((i)=> i.id !== item.id )  
        setCart(remove)  
        localStorage.setItem('cart' , JSON.stringify(cart))    
      }

    useEffect(()=>{
        localStorage.setItem('cart' , JSON.stringify(cart))    
      },[])



    return (
        <CartContext.Provider value={{ cart , sendCart , decrease , increase , counter , increaseCart , decreaseCart , delPro}}>
            { children }
        </CartContext.Provider>
    )
}

