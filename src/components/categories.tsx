interface Props {
    id: number;
    name: string;
}

const Categories = ({ id , name }: Props) => {
    return (
        <div key={id} className="col-span-2 md:col-span-1">
            <button className={"p-3 border shadow-lg rounded-full " + (id === 1 ? "bg-yellow-400" : "hover:bg-yellow-400")}>
                <p className="text-3xl">
                    <img src={"assets/icons/" + name + ".svg"} width="40px" height="40px"
                        className="border rounded-full p-2 bg-white" />
                </p>
                <p className="mt-3 mb-5 text-xs">
                    {name}
                </p>
            </button>
        </div>
    );
};

export default Categories;