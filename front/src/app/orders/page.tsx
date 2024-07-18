'use client';

import { getOrders } from "@/helpers/order.helpers";
import { IOrder, userSession } from "@/types/types";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SideNavbar from "@/components/sidebar";
import { format, parseISO } from 'date-fns'


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
                    orders.map((order: IOrder) => {
                        const parsedDate = parseISO(order.date.toString());
                        const dateSplit = format(parsedDate, 'dd/MM/yyyy');
                        const timeSplit = format(parsedDate, 'HH:mm:ss');
                        return (
                            <div className="ml-64 my-5">
                                <div key={order.id} className=" bg-white w-9/10 rounded-xl mx-auto p-2 shadow-sm">
                                    <div className="flex flex-col">
                                        <h1 className="text-green-500 uppercase text-xs">{order.status}</h1>
                                        <div>
                                            <h1>Order ID: {order.id}</h1>
                                            <p>{dateSplit} {timeSplit}</p>
                                        </div>
                                    </div>
                                    <div className="">{order.products.map((product) => (
                                        <div className="flex " key={product.id}>
                                            <div className="w-40">
                                                <img className="w-40" src={product.image} alt={product.name} />
                                            </div>
                                            <div>
                                                <p className="text-xl font-medium">{product.name}</p>
                                                <p>$ {product.price}</p>
                                                <p className="border w-[800px]"></p>
                                                <div className="mt-6 flex justify-end">
                                                    <button className="w-44 rounded-xl bg-black text-white p-2 hover:scale-105 transition-all duration-300">Buy again</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))} </div>
                                </div>
                            </div>
                        )

                    })

                ) : (
                    <div className="flex flex-col items-center mt-8 h-screen">
                        <h1 className="text-3xl mb-5">Cart:</h1>
                        <h2 className="text-xl mb-3">You don't have any orders</h2>
                        <Link href="/">
                            <button className="w-60 rounded-xl bg-black text-white p-3 hover:scale-105 transition-all duration-300">Buy now!</button>
                        </Link>
                    </div>
                )
            }

        </div >
    )

}

export default Order
