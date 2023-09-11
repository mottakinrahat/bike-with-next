import React from 'react';

const AltBike = () => {
    return (
        <div>
            <h2 className='text-center mt-10 text-3xl font-bold mb-10'>Bike Collection</h2>
            <div className='grid grid-cols-3 mx-auto ml-20 justify-between items-center gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/tYXHmLz/Suzuki-Gixxer-SF-Fi-ABS-Silver.jpg" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Suzuki-Gixxer-SF-Fi-ABS
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Price: 2499.99</p>
                        <div className="card-actions justify-end">

                            <div className="badge badge-outline">Color: Silver</div>
                        </div>
                        <button className='btn bg-indigo-500 text-white mt-4'>Buy Now</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/PjwjPvK/Suzuki-gixxer-carb-disc-dual-tone-2023.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Suzuki-gixxer-dual-tone
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Price: 1599.99</p>
                        <div className="card-actions justify-end">

                            <div className="badge badge-outline">Color: Semi Black</div>
                        </div>
                        <button className='btn bg-indigo-500 text-white mt-4'>Buy Now</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/NV9h4RQ/Suzuki-Gixxer-Classic-Matt-Blue.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Gixxer-Classic-Matt
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Price:  1899.99</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Color: Naveblue</div>
                        </div>
                        <button className='btn bg-indigo-500 text-white mt-4'>Buy Now</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/HNMZph5/Suzuki-Gixxer-Classic-Plus.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Suzuki-Gixxer-Classic-Plus
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Price: 2199.99</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Color: Yellow</div>
                        </div>
                        <button className='btn bg-indigo-500 text-white mt-4'>Buy Now</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/hYygrKk/Suzuki-Gixxer-SF-Matt-Plus.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Suzuki-Gixxer-SF-Matt
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Price: 899.99</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Color: Semi Matt</div>
                        </div>
                        <button className='btn bg-indigo-500 text-white mt-4'>Buy Now</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/3swC17J/Suzuki-Bandit-Dual-Channel-ABS-grey.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Suzuki-Bandit-Dual-Channel
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Price: 349.99</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Color: Dark</div>
                        </div>
                        <button className='btn bg-indigo-500 text-white mt-4'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AltBike;