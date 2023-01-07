import React from 'react';
import { Link } from 'react-router-dom';

// Sub-component which receives an address via it's props, and then breaks it down into pieces and formats it all together, returning the formatted address display.
function AddressDisplay(props: any) {
    const { address } = props;
    const addrComponents = address.split(',');

    return (
        <a target="_blank" rel="noreferrer" href={`https://google.ca/maps/place/${address.replaceAll(" ", "+")}`} className="text-md text-gray-100 font-raleway hover:opacity-75">
            <p>{addrComponents[0]}</p>
            <p>{`${addrComponents[1]}, ${addrComponents[2]}`}</p>
            <p>{addrComponents[3]}</p>
        </a>
    );
}

/*
    Receives an array of business hours, and returns a reformatted array where all back-to-back days with the same hours are joined together.
    Ex. Input: Mon. 10 - 5, Tues. 10 - 5, Wed. 10 - 5, Thurs. 10 - 7, Fri. 10 - 7, Sun. 12 - 5
    Ex. Output: Mon. to Wed. 10 - 5, Thurs. to Fri. 10 - 7, Sun. 12 - 5

*/
function parseHours(hours: [{ weekday: string, open_time: string, close_time: string }]) {
    let hourChart: any = [];

    hours.forEach((day: { weekday: string, open_time: string, close_time: string }) => {
        const openParts = day.open_time.split(':');
        const closeParts = day.close_time.split(':');

        let hoursString = undefined;

        if (day.open_time === day.close_time) {
            hoursString = 'Closed';
        } else {
            hoursString = `${parseInt(openParts[0]) > 12 ? parseInt(openParts[0]) - 12 : parseInt(openParts[0])}:${openParts[1]}${parseInt(openParts[0]) > 12 ? "pm" : "am"} to ${parseInt(closeParts[0]) > 12 ? parseInt(closeParts[0]) - 12 : parseInt(closeParts[0])}:${closeParts[1]}${parseInt(closeParts[0]) > 12 ? 'pm' : 'am'}`;
        }
        
        if (hourChart.length > 0) {

            if (hourChart[hourChart.length - 1].hours === hoursString) {
                hourChart[hourChart.length - 1].days.push(day.weekday);
            } else {
                hourChart.push({
                    days: [ day.weekday ],
                    hours: hoursString
                });
            }

        } else {
            hourChart.push({
                days: [ day.weekday ],
                hours: hoursString
            });
        }
    });

    return hourChart;
}

// Footer component function.
export default function FooterLocationInformation(props: any) {

    const { locations } = props;
    let footer = null;

    /*
    
        Format the footer component differently based on how many locations were fetched in the database

        For no locations, display basic contact information and inform the user that there are no locations found.
        For one location, display it's address along with basic contact information, as well as business hours.
        For multiple locations, display a list of all of them which can be clicked to navigate to a location details page (unimplemented page).
    
    */
    if (!locations || locations.length < 1) {
        footer = <div className="px-2 grid grid-cols-1 lg:grid-cols-2">
            <div className="text-center lg:text-start px-4 my-3">
                <p className="text-white text-4xl font-black uppercase mb-3 font-title">Reach Out</p>
                
                <p className="text-white text-lg uppercase font-title">Email</p>
                <a className="text-gray-200 text-md hover:opacity-75 font-raleway" href="mailto:luxsalon@gmail.com"><span>luxsalon@gmail.com</span></a>
            </div>

            <div className="text-center px-4 lg:text-start my-3">
                <p className="text-white text-xl font-bold">No locations found!</p>
                <p className="text-gray-200 text-md font-thin font-raleway">Try refreshing the page!</p>
            </div>

            <div className="px-4 text-center lg:text-end my-3">
                <p className="text-white text-4xl font-black uppercase mb-3 font-title">Connect</p>
                
                <div className="mb-3">
                    <p className="uppercase font-bold font-title text-accent-100 text-xl">Instagram</p>
                    <a target="_blank" rel="noreferrer" className="text-md text-gray-100 hover:opacity-75 font-raleway" href="https://instagram.com/lux.salon">@lux.salon</a>
                </div>
                
                <div className="mb-3">
                    <p className="uppercase font-bold font-title text-accent-100 text-xl">Facebook</p>
                    <a target="_blank" rel="noreferrer" className="text-md text-gray-100 hover:opacity-75 font-raleway" href="https://facebook.com/lux_salon">@lux_salon</a>
                </div>
            </div>
        </div>
    } else if (locations.length === 1) {
        footer = <div className="px-2 grid grid-cols-1 lg:grid-cols-3 text-center lg:text-start">
            <div className="px-4 my-3">
                <p className="text-white text-4xl font-black uppercase mb-3 font-title">Reach Out</p>

                <div className="mb-3">
                    <p className="uppercase font-bold font-title text-accent-100 text-xl">Phone</p>
                    <a className="text-md text-gray-100 hover:opacity-75 font-raleway" href={`tel:${locations[0].phone}`}>{ locations[0].phone }</a>
                </div>

                <div className="mb-3">
                    <p className="uppercase font-bold font-title text-accent-100 text-xl">Email</p>
                    <a className="text-md text-gray-100 hover:opacity-75 font-raleway" href="mailto:luxsalon@gmail.com">luxsalon@gmail.com</a>
                </div>
                
                <div>
                    <>
                        <p className="uppercase font-bold font-title text-accent-100 text-xl">Address</p>
                        <AddressDisplay address={locations[0].address}/>
                    </>
                </div>
            </div>

            <div className="px-4 text-center my-3">
                <p className="text-white text-4xl font-black uppercase mb-3 font-title">Our Hours</p>

                <div className="grid grid-cols-2 lg:grid-cols-3 text-center gap-6">
                {
                    parseHours(locations[0].hours).map((range: any) => {
                        return <div>
                            <p className="uppercase text-accent-100 font-bold font-title text-xl">{ range.days.length > 1 ? `${range.days[0].substring(0, 3)} - ${range.days[range.days.length - 1].substring(0, 3)}` : range.days[0] }</p>
                            <p className="text-md text-gray-100 font-raleway">{range.hours}</p>
                        </div>
                    })
                }
                </div>
            </div>

            <div className="px-4 text-center lg:text-end my-3">
                <p className="text-white text-4xl font-black uppercase mb-3 font-title">Connect</p>
                
                <div className="mb-3">
                    <p className="uppercase font-bold font-title text-accent-100 text-xl">Instagram</p>
                    <a target="_blank" rel="noreferrer" className="text-md text-gray-100 hover:opacity-75 font-raleway" href="https://instagram.com/lux.salon">@lux.salon</a>
                </div>
                
                <div className="mb-3">
                    <p className="uppercase font-bold font-title text-accent-100 text-xl">Facebook</p>
                    <a target="_blank" rel="noreferrer" className="text-md text-gray-100 hover:opacity-75 font-raleway" href="https://facebook.com/lux_salon">@lux_salon</a>
                </div>
            </div>
        </div>
    } else {
        footer = <div className="px-2 grid grid-cols-1 lg:grid-cols-2">
            <div className="text-start px-4 my-3">
                <p className="text-white text-4xl font-black uppercase mb-3 font-title">Reach Out</p>

                <div className="mb-3">
                    <p className="uppercase font-bold font-title text-accent-100 text-xl">Email</p>
                    <a className="text-md text-gray-100 hover:opacity-75 font-raleway" href="mailto:luxsalon@gmail.com">luxsalon@gmail.com</a>
                </div>
            </div>
            <div className="text-start px-4">
                <p className="text-white text-4xl font-black uppercase mb-3 font-title">Our Locations</p>

                {
                    locations.map((loc: any) => {
                        return <div className="mb-4 text-accent-100">
                            <Link to={`/location/${loc.id}`} className="text-md text-gray-100 font-raleway">{loc.name}</Link>
                        </div>
                    })
                }
            </div>

            <div className="px-4 text-center lg:text-end my-3">
                <p className="text-white text-4xl font-black uppercase mb-3 font-title">Connect</p>
                
                <div className="mb-3">
                    <p className="uppercase font-bold font-title text-accent-100 text-xl">Instagram</p>
                    <a target="_blank" rel="noreferrer" className="text-md text-gray-100 hover:opacity-75 font-raleway" href="https://instagram.com/lux.salon">@lux.salon</a>
                </div>
                
                <div className="mb-3">
                    <p className="uppercase font-bold font-title text-accent-100 text-xl">Facebook</p>
                    <a target="_blank" rel="noreferrer" className="text-md text-gray-100 hover:opacity-75 font-raleway" href="https://facebook.com/lux_salon">@lux_salon</a>
                </div>
            </div>
        </div>
    }

    return footer;
}