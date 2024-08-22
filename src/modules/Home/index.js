import React, { useEffect,useState } from 'react'
import Hero from '../../components/Hero';
import Products from '../../components/Products';
import Stats from '../../components/Stats';
import Categories from '../../components/Categories';

function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            // console.log(data);
            setProducts(data);
        }  
        fetchProducts()
    }, [])
    
    return(
        <>
            <Hero />
            <Categories />
            <h2 className='text-6xl font-bold text-center mt-20'>Products</h2>
            {
                products.length > 0 ?
                <Products products={products} /> : 
                <div className='text-center text-4xl mt-3'>Loading...</div>
            }
            {/* <Products /> */}
            <Stats />
        </>
    )
}

export default Home;