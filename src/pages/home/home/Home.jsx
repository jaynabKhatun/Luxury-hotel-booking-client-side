import Banner from "../banner/Banner";
import Cards from "../cards/Cards";
import Map from "../map/Map";
import SubscriptionLt from "../sublatter/SubscriptionLt";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
    return (
        <div>
           {/* <Banner></Banner> */}
           <Map></Map>
           <Cards></Cards>
           <SubscriptionLt></SubscriptionLt>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;