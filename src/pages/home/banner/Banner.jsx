

const Banner = () => {
    return (

        <div
            className='w-full bg-center bg-cover h-[38rem] min-h-[calc(100vh-100px)]'
            style={{
                backgroundImage: `url("https://i.ibb.co/sFnPWYY/lotus-design-n-print-Wgk-A3-CSFrjc-unsplash.jpg")`,
            }}
        >
          
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                        Build your new <span class='text-blue-400'>Saas</span> Project
                    </h1>
                    <br />
                    <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                        Post Job & Hire Expert
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Banner;