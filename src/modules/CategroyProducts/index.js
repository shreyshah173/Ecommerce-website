import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../components/Products';

function CategoryProduct() {
    const { name } = useParams();
    // console.log(name);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async() => {
            // console.log(name);
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
            const data = await response.json();
            console.log(data);
            setProducts(data);
        }
        fetchProducts()
    }, [])

    if (products.length === 0 ) return <div> loading check.......</div>

    return (
        <>
            <Products products={products}/>
        </>
    )
}

export default CategoryProduct;
