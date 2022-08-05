import React, { useEffect, useState } from 'react';

import env from 'react-dotenv';

export default function ServicesPage() {

    const [ services, setServices ] = useState<any[]>([]);

    useEffect(() => {
        fetch(`${env.API_URL}/api/services`).then(resp => resp.json()).then(results => {
            if (results.data) {
                let categories: any[] = [];

                results.data.forEach((service: any) => {
                    let idx = categories.findIndex(c => c.name === service.category);

                    if (idx > -1) {
                        categories[idx].services.push({
                            name: service.name,
                            price: service.price,
                            variable: service.variablePrice,
                            consultation: service.consultation
                        });
                    } else {
                        categories.push({
                            name: service.category,
                            services: [ {
                                name: service.name,
                                price: service.price,
                                variable: service.variablePrice,
                                consultation: service.consultation
                            } ]
                        });
                    }

                });

                setServices(categories);
            }
        });
    }, []);

    return (
        <div className="grid grid-cols-3 grid-rows-auto">
            <div className="col-span-3 w-full h-auto text-center py-20" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/servicesbg.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionY: '30%' }}>
                <p className="text-white font-bold text-6xl" style={{ textShadow: '0px 0px 0.25rem rgba(0, 0, 0, 0.75)' }}>Our Services</p>
                <p className="text-gray-200 text-2xl font-thin w-1/2 mx-auto" style={{ textShadow: '0px 0px 0.2rem rgba(0, 0, 0, 1)' }}>Experience excellency across all of our services.</p>
            </div>

            <div className="col-span-3 w-full px-5 md:w-1/2 lg:px-0 h-auto py-5 lg:py-20 mx-auto text-center">
                <p className="text-raleway text-white text-xl font-light" style={{ textShadow: '0px 0px 0.2rem rgba(0, 0, 0, 0.5)' }}>
                    Looking for a quick cut, to have colour added, or a full blown styling session? No matter what you're looking for, we're happy to help you to achieve the look that you're dreaming of. Take a look below at our available services and prices, and give us a call to book your appointment.
                </p>
            </div>

            <img className="aspect-square w-full col-span-3 lg:col-span-1 mb-2 w-full" alt="Stock hair salon." src={`${process.env.PUBLIC_URL}/services_img1.jpg`}/>
            <img className="aspect-square w-full hidden lg:block col-span-1 mb-2 w-full" alt="Stock hair salon." src={`${process.env.PUBLIC_URL}/services_img2.jpg`}/>
            <img className="aspect-square w-full hidden lg:block col-span-1 mb-2 w-full" alt="Stock hair salon." src={`${process.env.PUBLIC_URL}/services_img3.jpg`}/>

            <div className="col-span-3 w-full h-auto p-5">
                {
                    services.map((category: any) => {
                        return <div className="mb-10">
                            <p className="font-bold text-white text-3xl font-title uppercase" style={{ textShadow: '0px 0px 0.2rem rgba(0, 0, 0, 0.15)' }}>{category.name}</p>
                            <table className="w-full table-fixed border-collapse border border-primary-200">
                                <thead>
                                    <tr className="font-bold text-gray-100 text-lg bg-primary-500 font-title">
                                        <th className="text-start w-3/4 border border-primary-200 px-3">Service</th>
                                        <th className="text-start border border-primary-200 px-3">Price <span className="text-xs">(C$)</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        category.services.map((service: any, index: number) => {
                                            return (
                                                <tr className={`${index % 2 === 0 ? 'bg-primary-400' : 'bg-primary-300'} hover:opacity-75 hover:cursor-default`}>
                                                    <td className="w-3/4 border border-primary-200 px-3 font-raleway text-white">{service.name}</td>
                                                    <td className="w-3/4 border border-primary-200 px-3 font-raleway text-white text-center lg:text-start">
                                                        {
                                                            service.consultation ?
                                                            `Consultation Required`
                                                            :
                                                            `${service.variable ? 'Starting from' : ''} \$${service.price.toFixed(2)}`
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    })
                }
            </div>
        </div>
    )
}