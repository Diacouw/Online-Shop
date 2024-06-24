import { createContext, useEffect, useState } from "react";


export const StoreContext = createContext(null)


const StoreContextProvider =  (props) => {


    const allBranch = [
        { id: 1, src: './Images/shop-1.jpg', branch: 'Baq Ferdows', address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.11' },
        { id: 1, src: './Images/shop-2.jpg', branch: 'Velenjak', address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.423' },
        { id: 1, src: './Images/shop-3.jpg', branch: 'Nelson Mandela', address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.221' },
        { id: 1, src: './Images/shop-4.jpg', branch: 'Shahrak Gharb', address: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.19' }
    ]


    const [categorys, setCategorys] = useState([])

    const [allProducts, setAllProducts] = useState([])

    const [basket, setBasket] = useState([])

    const [lastBasket, setLastBasket] = useState([])

    const [product, setProduct] = useState([])



    const getCategory = async () => (
        await fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategorys(json))
    )

     const  getSinglePrudoct =  (id) => {
         fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(result =>  setProduct(result))
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => setAllProducts(result))
        getCategory()
        
    }, [])


    useEffect(() => {
        setLastBasket(basket.filter((obj, index) => {
            return index === basket.findIndex(o => obj.id === o.id && obj.name === o.name);
        }))
    }, [basket ,setBasket])




    const contextValue = {
        allProducts,
        categorys,
        allBranch,
        basket,
        setBasket,
        lastBasket,
         getSinglePrudoct,
        product,
        setProduct
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )


}

export default StoreContextProvider