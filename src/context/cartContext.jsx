import { createContext, useState } from "react"

export const cartContext = createContext()

export function CartContextProvider(props){

    const [cart, setCart] = useState ([])

    function agregarAlCarro(product, count){
        let validarItemCarro = cart.findIndex( item => item.id === product.id)
        let nuevoCarro = [...cart]
        if (validarItemCarro){
            nuevoCarro[validadItemCarro].count += count
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

/*     function limpiarCarro(){}

    function eliminarItem(id){} */


    return(
        <cartContext.Provider value={{cart, agregarAlCarro, itemsEnElCarro}}>
            {props.children}
        </cartContext.Provider>
    )
}