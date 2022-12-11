import productos from "../data/productos";

export function getItems(idCategory) {

    return new Promise((resolve) => {

        if (idCategory === undefined){
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        }
        else{
            let itemSolicitado = productos.filter( (item) => item.categoria === idCategory)
            setTimeout(() => {
                resolve(itemSolicitado);
            }, 2000);
        }
    });
}

/* export default getItems */

export function getSingleItem(idParam) {

    return new Promise((resolve) => {
        let itemSolicitado = productos.find( (item) => item.id === parseInt(idParam))

        setTimeout(() => {
            resolve(itemSolicitado);
        }, 2000);
    });
}

