import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export function BreadcrumbLayout() {
    return (
        <>
            <Breadcrumb aria-label="Default breadcrumb example">
                <BreadcrumbItem icon={HiHome} href="/">Home</BreadcrumbItem>
                <BreadcrumbItem></BreadcrumbItem>
            </Breadcrumb>
        </>
    );
}