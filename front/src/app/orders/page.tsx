'use client';

import { getOrders } from "@/helpers/order.helpers";
import { IOrder, userSession } from "@/types/types";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SideNavbar from "@/components/sidebar";


const Order = () => {

    const [userData, setUserData] = useState<userSession>();
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const userData = localStorage.getItem('UserSession')
            setUserData(JSON.parse(userData!))
        }
    }, [])

    useEffect(() => {
        const dataFetch = async () => {
            const orders = await getOrders(userData?.token!)
            setOrders(orders)
        }
        userData?.token && dataFetch()


    }, [userData?.token])

    return (
        <div className="w-full">
            <SideNavbar />
            {
                orders?.length > 0 ? (

                    orders.map((order: IOrder) => (

                        <div key={order.id} className="ml-64 border-l ">
                            <h1>Order: {order.id}</h1>
                            <h1>Status: {order.status}</h1>
                            <h1>Date: {order.date.toLocaleString()}</h1>
                            <h1>Products:{order.products.map((product) => (
                                <div key={product.id}>
                                    <h1>Name: {product.name}</h1>
                                    <h1>Price: {product.price}</h1>
                                    <h1>Description: {product.description}</h1>
                                    <h1>Image: {product.image}</h1>
                                </div>
                            ))} </h1>
                        </div>

                    ))

                ) : (
                    <div className="flex flex-col items-center mt-8">
                        <h1 className="text-3xl mb-5">Cart:</h1>
                        <h2 className="text-xl mb-3">You don't have any orders</h2>
                        <Link href="/home">
                            <button className="w-60 rounded-xl bg-black text-white p-3 hover:scale-105 transition-all duration-300">Buy now!</button>
                        </Link>
                    </div>
                )
            }

        </div >
    )

}

export default Order
