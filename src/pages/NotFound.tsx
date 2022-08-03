import React from 'react';

export default function NotFoundPage() {

    return (
        <div className="flex flex-col items-center justify-center text-center py-5 h-screen">
            <h1 className="text-white font-black text-9xl font-title">404</h1>
            <p className="text-gray-100 font-thin text-3xl">The page you're trying to reach doesn't exist!</p>
        </div>
    )

}