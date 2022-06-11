const products = [
    {
        id: "1",
        name: "Torta Oreo",
        category: "tortas",
        price: 1250,
        img: "https://www.recetasderechupete.com/wp-content/uploads/2019/11/Tarta-de-Oreo.jpg",
        stock: "10",
    },
    {
        id: "2",
        name: "Postre Oreo",
        category: "postres",
        price: 350,
        img: "https://i.ytimg.com/vi/9rqq8rIFIQw/maxresdefault.jpg",
        stock: "25",
    },
    {
        id: "3",
        name: "Galleta con chips",
        category: "galletas",
        price: 250,
        img: "https://i.pinimg.com/474x/51/82/b6/5182b62a34caf1b28d4c3559193016a6.jpg",
        stock: "20",
    },
    
]
export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}
