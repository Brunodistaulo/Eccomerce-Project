import { fetchProducts } from '@/helpers/product.helper';
import Card from '.';


const ProductFetch = async () => {
    const res = await fetch('http://localhost:3002/products');
    const data = await res.json();
    return data
}

const Product: React.FC = async () => {
    const productsToPreLoad = await fetchProducts();

    return (
        <div className="flex items-center justify-around flex-wrap mt-10">
            {
                productsToPreLoad.map((product: any) => (
                    <Card key={product.id} {...product} />
                ))
            }
        </div>
    );
};
export default Product;