import { createContext, useState } from "react"

export const cartContext = createContext()

export function CartContextProvider(props){

    const [cart, setCart] = useState ([])

    function agregarAlCarro(product, count){

        let validarItemCarro = cart.findIndex( item => item.id === product.id)
        let nuevoCarro = [...cart]
        if (validarItemCarro !== -1){
            nuevoCarro[validarItemCarro].count += count
            setCart(nuevoCarro)
        } else {
            product.count = count
            nuevoCarro.push(product)
            setCart(nuevoCarro)
        } 
    }

    function itemsEnElCarro(){
        let total = 0;
        cart.forEach(itemsEnElCarro => total = total + itemsEnElCarro.count)
        return total
    }
    
    function sacarItem(id) { 
        setCart(cart.filter((item) => item.id !== id))
    } 

    function vaciarCarro(){
        setCart([])
    }

    function precioTotalCarro(){
        let precioTotal = 0
        cart.forEach((product) => (precioTotal = precioTotal + product.importe * product.cantidad))
        return precioTotal
    }

    return(
        <cartContext.Provider value={{cart, agregarAlCarro, itemsEnElCarro,  vaciarCarro, precioTotalCarro, sacarItem}}>
            {props.children}
        </cartContext.Provider>
    )
}