const Product = () => {
    return (
        <div className="col-span-3 mx-3 mt-10">
            <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg my-2">
                <img className="w-full" src="assets/images/pexels-photo-1600711.jpeg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <p className="text-xs">25-30min</p>
                    <div className="font-bold text-sm mb-2">Bagel Story</div>

                    <p className="text-grey-darker text-xs inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                        <span className="mx-3">4.7</span>
                        <span className="text-sm ml-16">$4.99</span>
                        <button
                            className="text-sm ml-5 bg-yellow-400 text-white p-1 px-2 rounded font-bold overflow-hidden">Add</button>

                    </p>

                </div>
            </div>
        </div>
    );
};

export default Product;