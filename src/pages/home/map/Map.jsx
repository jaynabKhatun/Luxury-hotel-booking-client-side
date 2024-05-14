
import GoogleMapReact from 'google-map-react';

import mappic from '../../../assets/map/map.jpg'

import { FaLocationArrow } from 'react-icons/fa6';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnyReactComponent = ({ text }) => <div style={{ color: 'red' }}>{<FaLocationArrow className='text-2xl' />}</div>;



const Map = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,

        })
    }, [])


    const defaultProps = {
        center: {
            lat: 23.777176,
            lng: 90.399452
        },
        zoom: 11
    };

    return (

        <div>
            <h1 className='text-4xl bg-base-200 text-center mt-20 mb-6 font-mim font-bold' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"> Our Location</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                <div className='flex justify-center items-center' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">



                    <img className='border-8' src={mappic} alt="" />


                </div>


                <div className='border-8  shadow-2xl' data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="4000" style={{ height: '600px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: '' }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={defaultProps.center.lat}
                            lng={defaultProps.center.lng}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    );
};

export default Map;