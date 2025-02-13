import { fetchProducts } from '@/helpers/product.helper';
import Card from '.';


const Product: React.FC = async () => {
    const productsToPreLoad = await fetchProducts();

    return (
        <div className="flex items-center justify-around flex-wrap m-10">
            {
                productsToPreLoad.map((product: any) => (
                    <Card key={product.id} {...product} />
                ))
            }
        </div>
    );
};
export default Product;