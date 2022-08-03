import React from 'react';

export default function HomePage() {

    return (
        <div className="grid grid-cols-3 grid-rows-auto">
            <div className="col-span-3 text-center py-20" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/homeheader.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: -650 }}>
                <p className="text-accent-100 text-6xl uppercase font-bold font-title pb-6" style={{ textShadow: '0px 0px 0.5rem rgba(0, 0, 0, 0.75)' }}>Welcome to Lux</p>
                <p className="text-gray-100 text-xl font-light font-raleway w-full px-3 lg:px-0 lg:w-1/2 lg:mx-auto"  style={{ textShadow: '0px 0px 0.5rem rgba(0, 0, 0, 0.75)' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et feugiat sem. In consectetur augue id erat egestas, ac malesuada tortor congue. Fusce sagittis tincidunt accumsan. In a ante a ante auctor lobortis. Aenean nisi sem, aliquam suscipit ligula id, semper egestas nunc. Phasellus vitae dui tortor. Aliquam dignissim lacus nisl. Phasellus congue felis lorem, sit amet tristique turpis condimentum sit amet. Vestibulum enim nisl, venenatis lacinia nisi eu, viverra interdum ligula. Sed non tortor orci.
                </p>
            </div>

            <div className="col-span-3 text-center py-20 bg-primary-300">
                <p className="text-accent-100 text-5xl uppercase font-bold font-title pb-6">Who are we?</p>
                <p className="text-gray-100 text-xl font-light font-raleway w-full px-3 lg:px-0 lg:w-1/2 lg:mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tortor vitae nulla consectetur venenatis. Nulla facilisi. Cras posuere odio nulla, eu mollis nibh ultricies eget. Praesent dui augue, elementum pretium vehicula sit amet, euismod eget eros. Aliquam eget risus in mauris mattis vestibulum id vel urna. Phasellus posuere augue quis tellus semper auctor. Nulla volutpat felis tincidunt hendrerit hendrerit. Integer ut vulputate lacus, non sollicitudin mi. Ut viverra lacus dolor, id molestie risus bibendum vitae. Quisque non diam eu ante volutpat consequat. Nunc suscipit magna sit amet tempor dapibus. Vivamus in eleifend lorem, quis imperdiet lorem. Nunc tincidunt massa ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis metus eget libero iaculis sollicitudin. Pellentesque sit amet mi viverra, elementum turpis in, lobortis magna.
                </p>
            </div>

            <img className="aspect-square col-span-3 lg:col-span-2" src={`${process.env.PUBLIC_URL}/hairstyletwo.jpg`} alt="Hairstyle #2"/>
            <div className="grid grid-cols-1 grid-rows-auto hidden lg:block">
                <img className="aspect-square" src={`${process.env.PUBLIC_URL}/hairstyleone.jpg`} alt="Hairstyle #1"/>
                <img className="aspect-square" src={`${process.env.PUBLIC_URL}/hairstylethree.jpg`} alt="Hairstyle #3"/>
            </div>

        </div>
    )

}