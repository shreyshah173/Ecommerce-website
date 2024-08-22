import React, { useEffect, useState } from 'react'

function Hero() {
    // const { id } = useParams();
    // console.log(id, 'id');
    const [product, setProduct] = useState({})
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/3`);
            const data = await response.json();
            
            // console.log(data);
            setProduct(data);
        }
        fetchProduct()
    }, [])

    console.log(product)
    return (
        <>
            <section className="text-gray-600 body-font  px-10 py-10 ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={product.image} style={{height:'450px' , width:'400px'}}/>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            <br className="hidden lg:inline-block" />{product.title}
                        </h1>
                        <p className="mb-8 leading-relaxed">{product.description}</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Buy Now</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;