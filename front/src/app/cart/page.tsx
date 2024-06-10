'use client';
import { CardProps, userSession } from "@/types/types";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createOrder } from "@/helpers/order.helpers";
import { MdDelete } from "react-icons/md";


const Cart = () => {

    const [userData, setUserData] = useState<userSession>();
    const [total, setTotal] = useState<number>(0);
    const [cart, setCart] = useState<CardProps[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const userData: userSession = JSON.parse(localStorage.getItem('UserSession')!)
            setUserData(userData)
            !userData?.token && redirect('/login')
        }

        const cartStored = JSON.parse(localStorage.getItem('cart') || '[]')
        if (cartStored) {
            let totalCart = 0
            cartStored?.map((item: CardProps) => {
                totalCart = totalCart + item.price
            })
            setTotal(totalCart)
            setCart(cartStored)
        }

    }, [])


    const handleOnDelete = (id: number) => {
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));

        const deletedProduct = cart.find(product => product.id === id);
        if (deletedProduct) {
            const newTotal = total - deletedProduct.price;
            setTotal(newTotal);
        }
    }

    const handleClick = async () => {
        if (cart.length < 1) return alert('Cart is empty')
        try {
            const idProduct = cart.map(product => product.id);
            await createOrder({ products: idProduct }, userData?.token!);
            alert('Buy successfully')
            setCart([])
            setTotal(0)
            localStorage.setItem('cart', "[]")
        } catch (error: any) {
            throw new Error(error)
        }

    }

    return (
        <div className="w-full">

            <div className="mt-24">
                {
                    cart?.length > 0 ? (
                        cart.map((cart) => (
                            <div key={cart.id} className="flex h-60 items-center m-7 bg-white shadow-lg rounded-md">
                                <div className="w-[420px] rounded-md">
                                    <img className="h-56 w-full" src={cart.image} alt={cart.name} />
                                </div>
                                <div className="ml-5">
                                    <h1 className="text-3xl uppercase font-semibold ml-4 mb-7">{cart.name}</h1>
                                    <p className="leading-7 ml-4 w-[950px]">{cart.description}</p>
                                    <p className="text-2xl ml-4 mt-5">$ {cart.price}</p>
                                </div>
                                <div className="mx-5">
                                    <button onClick={() => handleOnDelete(cart.id)}>
                                        <MdDelete className="text-3xl transition-all duration-300 hover:text-red-600" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center mt-20 h-screen">
                            <h1 className="text-3xl mb-5">Cart:</h1>
                            <h2 className="text-xl mb-3">You don't have any orders</h2>
                            <p className="mb-3">Do you want to see your successful orders?</p>
                            <div className="flex">
                                <Link href="/product" className="mr-5">
                                    <button className="w-60 rounded-xl bg-black text-white p-3 hover:scale-105 transition-all duration-300">Buy now!</button>
                                </Link>
                                <Link href="/orders">
                                    <button className="w-60 rounded-xl bg-black text-white p-3 hover:scale-105 transition-all duration-300">Order history</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <div >
                {
                    cart?.length > 0 ? (
                        <div className="flex flex-col absolute right-14 top-[105px] mt-2" >
                            <h1 className="text-2xl">Total: {total}</h1>
                            <button className="bg-black text-white text-xl p-1 rounded-lg hover:scale-105 transition-all duration-300 " onClick={handleClick}>Buy</button>
                        </div>
                    ) : null
                }

            </div>
            <button></button>
        </div >
    )

}

export default Cart
