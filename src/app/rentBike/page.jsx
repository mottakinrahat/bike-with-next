import React from 'react';

const RentBike = () => {
    return (
        <div className='px-20'>
            <h2 className='text-center mt-20 text-3xl font-bold mb-10 relative'>How to Rent Bike</h2>
            <div className='flex justify-between items-center w-full'>
                <div className='w-3/4 absolute Positive z-index:z-1'>
                    <h2 className='text-6xl font-bold ml-10 mt-10'>
                        <span className='text-red-600 '>Looking</span> to<br /> rent a bike
                    </h2>
                    <p className='mt-5 text-xl'>BikeBook offers 20+ types of bike for rent near<br />
                        to your door. Hurry up to book your prefered bike</p>
                        <div className='w-80 flex justify-between items-center gap-2 mt-10'>
                            <button><img src="https://i.ibb.co/QYTHkmp/ios-Copy.png" alt="" /> </button>
                            <button><img src="https://i.ibb.co/2d1qWGk/play-Copy.png" alt="" /> </button>
                            <button></button>
                        </div>

                    <form className='bg-white flex gap-4 justify-between w-[800px] mr-20 h-20 items-center p-4   mt-20 rounded-xl'>
                        <div className='flex flex-col'>
                            <label htmlFor="Input text-center">Location</label>
                            <input className='bg-cyan-100 h-10  px-2 rounded-xl' placeholder='location Name' type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Input text-center">Pick up Date</label>
                            <input className='bg-cyan-100 h-10 rounded-xl px-2' placeholder='date' type="date" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Input text-center">Return Date</label>
                            <input className='bg-cyan-100  px-2 h-10 rounded-xl' type="date" />
                        </div>

                        <button className='bg-indigo-700 text-white btn '>Submit</button>
                    </form>
                </div>

                <div className=''>
                    <img src="https://i.ibb.co/NmxqpQV/bike2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default RentBike;
