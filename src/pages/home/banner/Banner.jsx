import logo from '../../../assets/logo/logo.svg'


const Banner = () => {

    return (

        <div className="hero md:min-h-screen relative mt-4   " data-aos="zoom-in" style={{ backgroundImage: 'url(https://i.ibb.co/sFnPWYY/lotus-design-n-print-Wgk-A3-CSFrjc-unsplash.jpg)' }} >
            <div className='  absolute top-1 p-4    ' data-aos="zoom-out-down">
                <div className='flex-1'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-auto h-7' src={logo} alt='' />
                        

                    </div>
                </div>

            </div>



            <div className="card   md:w-full mt-10 md:max-w-screen-sm shadow-2xl md:border bg-transparent " data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="4000"

            >

                <img className="md:h-20" src={logo} alt="" />
                <h1 className="font-mim text-3xl text-center text-white">Your Next Destination</h1>




            </div >


        </div >








    );
};

export default Banner;