import React from 'react';

function Card({ title, src, price, vote }) {
    return (
        <div className='w-56 bg-white-500 shadow-md p-4 mb-4'>
            <img src={src} alt={title} className='w-full h-auto mb-2' />
            <p className='text-white font-bold'>{title}</p>
            <p className='text-white'>Price: {price}</p>
            <p className='text-white'>Vote: {vote}</p>
        </div>
    );
}

export default Card;
