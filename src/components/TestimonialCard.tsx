import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function TestimonialCard(props: any) {

    const { testimonial } = props;
    const createStars = () => {
        if (!testimonial) return;
        else {

            let stars = [];

            const filledStars = testimonial.rating;
            const unfilledStars = 5 - filledStars;

            for (let i = 0; i < filledStars; i++) {
                stars.push(
                    <FaStar className="inline mx-1 text-white"/>
                );
            }

            for (let i = 0; i < unfilledStars; i++) {
                stars.push(
                    <FaRegStar className="inline mx-1 text-white"/>
                );
            }

            return stars;

        }
    }

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