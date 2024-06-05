'use client';
import React, { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { getProductById } from "@/helpers/product.helper";
import { usePathname } from "next/navigation";
import { CardProps } from "@/types/types";


const ProductDetails = ({ params }: { params: { productsID: string }}) => {

    const pathname = usePathname();
    const [productDatails, setProductDatails] = useState<CardProps>();
    const [userData, setUserData] = useState<any>({});

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
    const handleClick = () => {
        if (!userData.token) {
            alert('You must be logged in')
        }
    };

    return (
        <div className="w-full h-screen">
            <Breadcrumb aria-label="Default breadcrumb example" className="my-3 ">
                <BreadcrumbItem icon={HiHome} href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/product">Products</BreadcrumbItem>
                <BreadcrumbItem>{productDatails?.name} </BreadcrumbItem>
            </Breadcrumb>
            {
                productDatails ? (
                    <div>
                        <div>
                            <img src={productDatails.image} alt={productDatails.name} className="w-1/3" />
                        </div>
                        <div>
                            <h1>{productDatails.name}</h1>
                            <p>{productDatails.description}</p>
                            <p>{productDatails.price}</p>
                        </div>
                        <div>
                            <button onClick={handleClick} >Add to cart</button>
                        </div>
                    </div>
                ) : (
                    <h1>Producto no encontrado</h1>
                )
            }
        </div>
    );
};

export default ProductDetails;