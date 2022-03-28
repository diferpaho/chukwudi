import { useState } from "react";
import products from "../json/products.json";
import categories from "../json/categories.json";
import Navbar from "./navbar";

interface IOrder {
    id: number,
    name: string,
    price: number,
    image: string
}

const Content = () => {

    const [orders, setOrders] = useState<IOrder[]>([]);
    const [total, setTotal] = useState(0);

    const min = {
        height: '50px'
    };

    const minImage = {
        height: '200px'
    };

    const addProduct = (id: number, name: string, price: number, image: string) => {
        const newProduct = [...orders, { id, name, price, image }]
        setOrders(newProduct)
        setTotal(total+price)

    };

    return (
        <>
        <Navbar quantity={orders.length}></Navbar>
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

                {categories.map((item) => (
                    <div key={item.id} className="col-span-2 md:col-span-1">
                        <button className={"p-3 border shadow-lg rounded-full " + (item.id === 1 ? "bg-yellow-400" : "hover:bg-yellow-400")}>
                            <p className="text-3xl">
                                <img src={"assets/icons/" + item.name + ".svg"} width="40px" height="40px"
                                    className="border rounded-full p-2 bg-white" />
                            </p>
                            <p className="mt-3 mb-5 text-xs">
                                {item.name}
                            </p>
                        </button>
                    </div>
                ))}


                <div className="col-span-1 pr-16 my-auto">
                    <button className="p-3 border shadow-lg rounded-full hover:bg-yellow-400 ">
                        <p className="">
                            <img src="assets/icons/der2.svg" width="64px" height="64px" className="" />
                        </p>
                    </button>
                </div>

                {products.map((item) => (
                    <div key={item.id} className="col-span-9 md:col-span-3 mx-3 mt-10">
                        <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg my-2">
                            <img className="w-full" src={item.image} style={minImage} alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <p className="text-xs">{item.time}</p>
                                <div className="font-bold text-sm mb-2" style={min}>{item.name}</div>

                                <p className="text-grey-darker text-xs inline-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-star" viewBox="0 0 16 16">
                                        <path
                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg>
                                    <span className="mx-3">{item.qualification}</span>
                                    <span className="text-sm ml-8">${item.price}</span>

                                </p>
                                <p className=" text-center mt-3"><button onClick={() => addProduct(item.id, item.name, item.price, item.image)}
                                    className="text-sm ml-5 bg-yellow-400 text-white mx-auto  p-1 px-6 rounded font-bold overflow-hidden">Add</button>

                                </p>
                            </div>
                        </div>
                    </div>
                ))}


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
                    {orders.map((item) => (
                        <>
                            <div className="text-gray-300 text-sm my-3  "><img className="w-full"
                                src={item.image} alt="Sunset in the mountains" /></div>
                            <button className="text-dark text-sm  my-3  text-left mx-2 col-span-2 font-bold">1 x {item.name}</button>
                            <button className="text-gray-400 text-sm  my-3  my-auto">{item.price}</button>
                        </>
                    ))}
                    
                </div>

                <div className="grid grid-cols-2 mt-10 mx-12 p-5 border-b-2">
                    <p className="text-dark text-2xl  my-3  my-auto">Total:</p>
                    <p className="text-dark text-2xl  my-3  my-auto text-right font-bold">${total}</p>
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
    </>
    );
};

export default Content;