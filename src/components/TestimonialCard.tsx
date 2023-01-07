import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function TestimonialCard(props: any) {

    // Extract the testimonial details from the component props.
    const { testimonial } = props;

    // Fucntion to use the testimonial 'rating' property to return an array of star icons, with some filled and some unfilled, based on the value of the rating.
    const createStars = () => {
        if (!testimonial) return;
        else {

            let stars = [];

            /*
                'filledStars' is the testimonial rating, which should be between 1 and 5.
                'unfilledStars' is used to create the unfilled star icons, and is equal to whatever is left after the potential 5 total stars has the rating number subtracted from it.
            */
            const filledStars = testimonial.rating;
            const unfilledStars = 5 - filledStars;

            // Add the filled stars to the array.
            for (let i = 0; i < filledStars; i++) {
                stars.push(
                    <FaStar className="inline mx-1 text-white"/>
                );
            }

            // Add the unfilled stars to the array.
            for (let i = 0; i < unfilledStars; i++) {
                stars.push(
                    <FaRegStar className="inline mx-1 text-white"/>
                );
            }

            // Return the array of star icon jsx elements.
            return stars;

        }
    }

    // Returns the testimonial card, populated with the data from the provided testimonial.
    return (
        <div className="p-4 h-full w-full bg-primary-500 hover:scale-105 ease-linear duration-200 text-start cursor-default rounded-md">
            <p className="text-white font-title font-bold uppercase text-xl">{testimonial.name}</p>
            <p className="text-gray-300 font-roboto text-md mb-4">{`${new Date(testimonial.posted).toLocaleDateString()}`}</p>

            <p className="mb-4">
                {
                    createStars()
                }
            </p>

            <p className="text-gray-300">
                {
                    testimonial.content
                }
            </p>
        </div>
    )
    
}