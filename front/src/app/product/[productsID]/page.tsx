'use client';
import React, { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { getProductById } from "@/helpers/product.helper";
import { usePathname } from "next/navigation";
import { CardProps, userSession } from "@/types/types";
import { useRouter } from 'next/navigation';


const ProductDetails = ({ params }: { params: { productsID: string } }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [productDatails, setProductDatails] = useState<CardProps>();
    const [userData, setUserData] = useState<userSession>();

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const userData = localStorage.getItem('UserSession')
            setUserData(JSON.parse(userData!))
        }

        const dataFetch = async () => {
            const dataProduct = await getProductById(params.productsID)
            setProductDatails(dataProduct)
        }
        dataFetch();
    }, [pathname])
    const handleClick = (e: any) => {
        if (!userData?.token) {
            alert('You must be logged in')
            router.push('/login')
        } else {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]')
            const productExist = cart.some((product: CardProps) => {
                if (product.id === Number(e?.target?.id)) return true;
                return false
            })
            if (productExist) {
                alert("Product added to cart")
                router.push('/cart')
            } else {
                cart.push(productDatails);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert("Product added to cart")
                router.push('/cart')
            }
        };
    }

    return (
        <div className="w-full h-screen">
            <Breadcrumb aria-label="Default breadcrumb example" className="my-2 ">
                <BreadcrumbItem icon={HiHome} href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/product">Products</BreadcrumbItem>
                <BreadcrumbItem>{productDatails?.name} </BreadcrumbItem>
            </Breadcrumb>
            {
                productDatails ? (
                    <div className="flex bg-white w-[1300px] h-5/6 mt-7 mx-auto shadow-lg rounded-lg ">
                        <div className="w-[1200px] h-3/4 mt-9">
                            <img className="rounded-lg w-full h-full" src={productDatails.image} alt={productDatails.name} />
                        </div>
                        <div className="flex flex-col leading-7">
                            <h1 className="text-3xl font-bold text-left ml-10 mt-9">{productDatails.name}</h1>
                            <p className="ml-10 mt-10 leading-7" >{productDatails.description}</p>
                            <p className="ml-10 text-3xl font-normal mt-10 mb-4">$ {productDatails.price}</p>
                            <div className="flex">
                                <div className="w-28 h-11 text-center p-2 rounded-xl ml-10 bg-black text-white hover:scale-105 transition-all duration-300 ease-in-out ">
                                    <button onClick={handleClick} >Add to cart</button>
                                </div>
                                <div className="w-28 h-11 text-center p-2 rounded-xl ml-7 bg-black text-white hover:scale-105 transition-all duration-300 ease-in-out ">
                                    <button>Buy now</button>
                                </div>
                            </div>
                            <div className="ml-10 mt-5">
                                <h3 className="">Specifications</h3>
                                <li className="font-light text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, iusto.</li>
                                <li className="font-light text-sm mt-1">Lorem ipsum dolor sit amet.</li>
                                <li className="font-light text-sm mt-1">Lorem ipsum dolor sit amet.</li>
                                <li className="font-light text-sm mt-1">Lorem ipsum dolor sit amet.</li>
                                <li className="font-light text-sm mt-1">Lorem ipsum dolor sit amet.</li>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center mt-20 h-screen">
                        <h1 className="text-3xl text-center">Producto no encontrado</h1>
                    </div>
                )
            }
        </div>
    );
};

export default ProductDetails;