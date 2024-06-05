import { CardProps } from "@/types/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// export async function createOrder(product){

// };


export async function getOrders(token: string){
    try {
        const res = await fetch(`${apiUrl}/users/orders`, {
            method: "GET",
            cache: "no-cache",
            headers: {
                Authorization: token,
            },
        })
        const data = await res.json();
        return data
    } catch (error: any) {
        throw new Error(error);
    }
}