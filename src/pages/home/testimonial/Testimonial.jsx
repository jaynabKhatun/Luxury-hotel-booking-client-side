import { useEffect, useState } from "react";
import SingleTest from "./SingleTest";



const Testimonial = () => {
    

    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }


        , []);










    return (
        <div className="grid md:grid-cols-2 gap-4 mt-10 mb-10">
            {
                reviews?.slice(0,6).map(review => <SingleTest  key={review._id}   review={review}></SingleTest>)
                
            }
        </div>
    );
};

export default Testimonial;