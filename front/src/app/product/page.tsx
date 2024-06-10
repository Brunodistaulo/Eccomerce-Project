'use client ';
import Product from "@/components/Card/product";
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";


const products: React.FC = () => {


    return (
        <div>
            <Breadcrumb aria-label="Default breadcrumb example" className="mt-3 ">
                <BreadcrumbItem icon={HiHome} href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/product">Products</BreadcrumbItem>
            </Breadcrumb>
            <Product />
        </div>
    )
}

export default products