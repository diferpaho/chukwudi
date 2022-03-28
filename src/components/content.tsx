import { useState } from "react";
import Added from "./added";
import Category from "./category";
import Product from "./product";

const Content = () => {

    const [categories, setCategories] = useState('');
    const [products, setProducts] = useState('');

    const [orders, setOrders] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');

    

    return (
        <div id="main" className="container mx-auto grid grid-cols-3">
            <div className="1 col-span-3 lg:col-span-2  grid grid-cols-9">

                <div className=" mx-auto py-12  col-span-9">
                    <div className="mx-3 flex bg-orange-50 rounded-3xl">
                        <div className="w-1/3 lg:w-1/3 lg:p-4 lg:scale-150 ml-20 mb-7">

                            <img src="assets/images/headerimage.png" alt="image" className="" />
                        </div>

                        <div className="w-1/3 lg:w-2/3 p-4 mt-12 ml-5">
                            <div className="inline-grid">
                                <p className="work-sans font-semibold text-xl text-orange-500">$ 0 delivery for 30 days!</p>
                                <p className="raleway text-sm my-4 text-gray-500 ">$ 0 delivery free for orders over $10 for 30
                                    days</p>
                                <p className="raleway mt-5 ml-5 text-sm my-4 text-orange-500 text-right opacity-75">Learn more
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-5 my-5 pl-16 font-semibold text-3xl">
                    Restaurants
                </div>

                <div className="col-span-4 my-5 text-right pr-16 ">
                    <span className="text-white bg-orange-500 p-2 rounded-3xl px-6">

                        Deliver: Now</span>
                </div>

                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>

                <div className="col-span-1 pr-16 my-auto">
                    <button className="p-3 border shadow-lg rounded-full hover:bg-yellow-400 ">
                        <p className="">
                            <img src="assets/icons/der2.svg" width="64px" height="64px" className="" />
                        </p>
                    </button>
                </div>

                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
            <div className="2 col-span-3 lg:col-span-1  border-l">
                <h1 className=" text-dark px-3 py-2 rounded-md text-2xl font-medium mx-16">My order</h1>

                <div className="grid grid-cols-2 mt-10 bg-violet-900 mx-16 p-5 rounded-3xl">

                    <div className="text-gray-300 text-sm my-3">625 St Marks Ave</div>
                    <button className="text-yellow-400 text-sm  my-3 text-right">Edit</button>
                    <div className="text-gray-300 text-sm  my-3">35 min</div>
                    <button className="text-yellow-400 text-sm  my-3 text-right">Choose time</button>

                </div>

                <div className="grid grid-cols-4 mt-10 mx-12 p-5 rounded-3xl">
                    <Added></Added>
                    <Added></Added>
                    <Added></Added>
                </div>

                <div className="grid grid-cols-2 mt-10 mx-12 p-5 border-b-2">
                    <p className="text-dark text-2xl  my-3  my-auto">Total:</p>
                    <p className="text-dark text-2xl  my-3  my-auto text-right font-bold">$25.99</p>
                </div>

                <div className="grid grid-cols-3 mt-10 mx-16 p-5 border-b-2 bg-yellow-400 rounded-3xl">
                    <p className="text-dark text-2xl  my-3  my-auto col-span-2 text-center">Checkout</p>
                    <p className="text-dark text-2xl  my-3  my-auto font-bold">
                        <img src="assets/icons/der.svg" width="24px" height="24px"
                            className="mt-2" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Content;