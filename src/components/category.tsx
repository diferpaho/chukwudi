const Category = () => {
    return (
        <div className="col-span-1">
            <button className="p-3 border shadow-lg rounded-full hover:bg-yellow-400">
                <p className="text-3xl">
                    <img src="assets/icons/piña.svg" width="40px" height="40px"
                        className="border rounded-full p-2 bg-white" />
                </p>
                <p className="mt-3 mb-5 text-xs">
                    Thai
                </p>
            </button>
        </div>
    );
};

export default Category;