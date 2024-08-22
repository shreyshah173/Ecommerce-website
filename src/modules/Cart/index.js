import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = cart.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);
        setTotal(total);
    }, [cart]);

    const handleInc = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.location.reload();
    };

    const removeProduct = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.location.reload();
    };

    const handleDec = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                if (item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                } else {
                    return null;
                }
            }
            return item;
        });

        const filteredCart = updatedCart.filter((item) => item !== null);
        localStorage.setItem('cart', JSON.stringify(filteredCart));
        window.location.reload();
    };

    if (!cart.length) return <div className="container flex justify-center mt-10 mb-10">Empty Cart</div>;

    return (
        <>
            <div className="container mx-auto my-5 px-10 shadow-lg">
                <div className="flex shadow-md">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5">Product Details</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Title</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
                        {/* Scrollable product list */}
                        <div className="overflow-y-scroll overflow-x-hidden" style={{ maxHeight: '300px' }}>
                            {
                                cart.map(cartItem => (
                                    <div key={cartItem.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                        <div className="w-1/5 flex justify-center">
                                            <img className="h-24 w-20 object-cover" src={cartItem.image} alt={cartItem.title} />
                                        </div>
                                        <span className="w-1/5 font-bold text-sm text-center truncate">{cartItem.title}</span>
                                        <div className="w-1/5 flex justify-center items-center">
                                            <svg className="fill-current text-gray-600 w-3 cursor-pointer" onClick={() => handleDec(cartItem.id)} viewBox="0 0 448 512">
                                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>

                                            <input className="mx-2 border text-center w-8" type="text" value={cartItem.quantity} readOnly />

                                            <svg className="fill-current text-gray-600 w-3 cursor-pointer" onClick={() => handleInc(cartItem.id)} viewBox="0 0 448 512">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </div>
                                        <span className="w-1/5 text-center font-semibold text-sm">${cartItem.price.toFixed(2)}</span>
                                        <span className="w-1/5 text-center font-semibold text-sm">${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <Link to={'/products'} className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </Link>
                    </div>
                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
                            <span className="font-semibold text-sm">${total.toFixed(2)}</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>${(total + 10).toFixed(2)}</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
