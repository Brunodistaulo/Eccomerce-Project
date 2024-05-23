import { CardProps } from "./types";


const Card: React.FC<CardProps> = ({ name, price, description, image }) => {
    return (
        <div >
            <div className="group h-96 w-80 [perspective:1000px] mt-10">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={image} alt={name} />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <p className="text-lg">{description}</p>
                        <p className="text-base">Precio: ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;