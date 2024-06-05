'use client';

import { getOrders } from "@/helpers/order.helpers";
import { IOrder } from "@/types/types";
import React, { useEffect, useState } from "react";
import Link from "next/link";


const Cart: React.FC = () => {

    const [userData, setUserData] = useState<any>({});
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const userData = localStorage.getItem('UserSession')
            setUserData(JSON.parse(userData!))
        }
    }, [])

    useEffect(() => {
        const dataFetch = async () => {
            const ordersRes = await getOrders(userData.token)
            setOrders(ordersRes)
        }
        userData.token && dataFetch()


    }, [userData.token])

    return (
        <div className="w-full h-screen">
            {
                orders?.length > 0 ? (

                    orders.map((order: IOrder) => (

                        <div key={order.id}>
                            <h1>Order: {order.id}</h1>
                            <h1>Status: {order.status}</h1>
                            <h1>Date: {order.date.toLocaleString()}</h1>
                            <h1>Products:</h1>
                        </div>

                    ))

                ): (
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

export default Cart
