import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/Products/categories');
            const data = await response.json();
            // console.log(data);
            setCategories(data);
        }
        fetchCategories()
    }, [])

    if(categories.length === 0) { return ( <div>Loading.........</div>)}
    return (
        <>
            <FeatureCard cards={categories}/>
            {/* <Products /> */}
            {/* <h1>Product Page</h1> */}
        </>
    )
}

export default Categories;