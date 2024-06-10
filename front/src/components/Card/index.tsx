"use client"

import { CardProps } from "../../types/types";
import Link from "next/link";


const Card: React.FC<CardProps> = ({ id,name, price, image }) => {
    return (
        <div >
            <div className="group h-96 w-80 [perspective:1000px] my-10">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={image} alt={name} />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/40 px-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h2 className="text-3xl font-bold py-[30px]">{name}</h2>
                        <p className="text-xl font-semibold py-4 absolute bottom-20 inset-x-0">Price: ${price}</p>
                        <Link href={`/product/${id}`}>
                        <button className="w-60 rounded-xl bg-black p-3 absolute bottom-5 left-1/2 -translate-x-1/2 transition hover:scale-105" >Datails</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;