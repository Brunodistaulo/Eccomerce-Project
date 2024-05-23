// import { CardProps } from "./types";

import productsToPreLoad from '../../ArrData';
import Card from '.';


const Product: React.FC= () => {


    return (
        <div className="flex min-h-screen items-center justify-around bg-slate-100 flex-wrap">
            {
                productsToPreLoad.map((product) => (
                    <Card key={product.name} {...product}/>
                ))
            }
        </div>
    );
};
export default Product;