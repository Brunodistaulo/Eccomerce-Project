import { CardProps } from "../../types/types";
import Link from "next/link";
import Image from "next/image";


const Card: React.FC<CardProps> = ({ id, name, price, image, caracteristics }) => {
    return (
        <div key={id} className="max-w-xs w-60 h-72 bg-white text-black rounded-lg shadow-md p-4 flex flex-col justify-between">
            <img
                className="w-60 h-40 object-cover rounded "
                src={image}
                alt={name}
            />
            <div className="mt-4">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-sm text-gray-500 mt-1">{caracteristics}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-300">★</span>
                </div>
                <span className="text-lg font-semibold">$ {price}</span>
            </div>
        </div>
    );
};

export default Card;