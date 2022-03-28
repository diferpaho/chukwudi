interface Props {
    name: string;
    image: string;
    price: number;
}

const Orders = ({ name, image, price }: Props) => {
    return (
        <>
            <div className="text-gray-300 text-sm my-3  "><img className="w-full"
                src={image} alt="Sunset in the mountains" /></div>
            <button className="text-dark text-sm  my-3  text-left mx-2 col-span-2 font-bold">1 x {name}</button>
            <button className="text-gray-400 text-sm  my-3  my-auto">{price}</button>
        </>
    );
};

export default Orders;