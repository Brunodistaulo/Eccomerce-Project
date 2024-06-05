import Carousel from "@/components/slider/page";
import Product from "../../components/Card/product";

const HomeLayout: React.FC = () => {
    return (
        <div>
            <Carousel />
            <div className="flex absolute  w-full h-[100px] -bottom-12 bg-custom-gradient "></div>
            <div className="flex absolute mx-auto top-[80%] left-1/2 -translate-x-1/2">
                <div className="w-[250px] h-[350px] mr-28 flex flex-col items-center rounded-2xl shadow-lg">
                    <a href="/product">
                        <div className="flex absolute w-[300px] h-[33px] bottom-1/4 bg-custom-gradient z-10"></div>
                        <img className="w-full h-3/4 rounded-t-2xl bg-gradient-to-r to-transparent" src="https://img.freepik.com/vector-premium/389-telefono-poster_602222-325.jpg" alt="#" />
                        <div className="text center" >
                            <h1 className="text-center text-[25px] font-semiblod mt-3 uppercase">Smartphones</h1>
                            <p className="text-center font-medium uppercase">The best smartphones</p>
                        </div>
                    </a>
                </div>
                <a href="">
                    <div className="w-[250px] h-[350px] mr-28 flex flex-col items-center rounded-2xl shadow-lg">
                        <div className="flex absolute  w-[300px] h-[30px] bottom-1/4 bg-custom-gradient z-10"></div>
                        <img className="w-full h-3/4 rounded-t-2xl" src="https://i.pinimg.com/736x/c4/60/39/c4603933f5d17df6fee7f74ee14c523a.jpg" alt="the best notebooks" />
                        <div>
                            <h1 className="text-center text-[25px] font-semiblod mt-3 uppercase">Notebooks</h1>
                            <p className="text-center font-medium">The best notebooks</p>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="w-[250px] h-[350px] flex flex-col items-center rounded-2xl shadow-lg">
                        <div className="flex absolute  w-[300px] h-[30px] bottom-1/4 bg-custom-gradient z-10"></div>
                        <img className="w-full h-3/4 rounded-t-2xl" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7f1314114521039.603d17f7938d4.png" alt="the best accesories" />
                        <div>
                            <h1 className="text-center text-[25px] font-semiblod mt-3 uppercase">Accesories</h1>
                            <p className="text-center font-medium" >The best accesories</p>
                        </div>
                    </div>
                </a>
            </div>

            <h2 className="text-center text-[25px] font-semiblod mt-[350px] uppercase">algunos de nuestros mejores productos</h2>
            <Product />
        </div>
    );
};
export default HomeLayout;