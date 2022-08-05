import React, { useEffect, useState } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import env from 'react-dotenv';

export default function HomePage() {

    const [ testimonials, setTestimonials ] = useState([]);

    useEffect(() => {

        fetch(`${env.API_URL}/api/testimonials`).then(resp => resp.json()).then((_t: any) => {
            if (_t.data) {
                setTestimonials(_t.data);
            }
        });

    }, []);

    return (
        <div className="grid grid-cols-3 grid-rows-auto">
            <div className="col-span-3 text-center py-20" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/homeheader.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: "75%" }}>
                <p className="text-accent-100 text-6xl uppercase font-bold font-title pb-6" style={{ textShadow: '0px 0px 0.5rem rgba(0, 0, 0, 0.75)' }}>Welcome to Lux</p>
                <p className="text-gray-100 text-xl font-light font-raleway w-full px-3 lg:px-0 lg:w-1/2 lg:mx-auto"  style={{ textShadow: '0px 0px 0.5rem rgba(0, 0, 0, 0.75)' }}>
                We provide people with a calm and tranquil place to put themselves first for a while. We are committed to providing our clients with treatments that are not only good for them but also good for the planet. It is important to us that each of our clients leaves Lux feeling their best.
                </p>
            </div>

            <div className="col-span-3 text-center py-20 bg-primary-300">
                <p className="text-accent-100 text-5xl uppercase font-bold font-title pb-6">Who are we?</p>
                <p className="text-gray-100 text-xl font-light font-raleway w-full px-3 lg:px-0 lg:w-1/2 lg:mx-auto">
                Welcome to Lux Salon. We are a sustainable at home salon located in North Oshawa, specializing in colour, styling, and cuts. We are committed to helping you feel your best. We are open 5 days a week and are always happy to meet new people. 					
                </p>
            </div>

            <img className="aspect-square col-span-3 lg:col-span-2 w-full" src={`${process.env.PUBLIC_URL}/home_img1.jpg`} alt="Hairstyle #2"/>
            <div className="grid grid-cols-1 grid-rows-auto hidden lg:block">
                <img className="aspect-square w-full" src={`${process.env.PUBLIC_URL}/home_img4.jpg`} alt="Hairstyle #1"/>
                <img className="aspect-square w-full" src={`${process.env.PUBLIC_URL}/home_img3.jpg`} alt="Hairstyle #3"/>
            </div>

            <div className="col-span-3 text-center py-20">
                <p className="text-accent-100 text-5xl uppercase font-bold font-title">Testimonials</p>
                <p className="text-gray-100 text-xl font-light font-raleway w-full pb-6 px-3 lg:px-0 lg:w-1/2 lg:mx-auto">Check out real testimonials from our customers!</p>
                <p className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto px-4">
                    {
                        testimonials.map((_testimonial: any) => {
                            return <TestimonialCard testimonial={_testimonial}/>
                        })
                    }
                </p>
            </div>
        </div>
    )

}