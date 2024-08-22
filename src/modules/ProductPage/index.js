import React, { useEffect, useState } from 'react';
// import FeatureCard from '../../components/FeatureCard';
import Categories from '../../components/Categories';

function Productpage() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('http://fakestoreapi.com/Products');
            const data = await response.json();
            // console.log(data);
            setCategories(data);
        }
        fetchCategories()
    }, [])

    if(categories.length === 0) { return ( <div>Loading.........</div>)}
    return (
        <>
            <Categories />
            {/* <FeatureCard cards={categories}/> */}
            {/* <Products /> */}
            {/* <h1>Product Page</h1> */}
        </>
    )
}

export default Productpage;