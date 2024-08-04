import React from 'react';

function Card({title, image, description, href}) {
    return(
        <div id="tile" className='w-[300px] overflow-hidden border-black shadow-sm rounded-md'>
            <div id="image" className=''>
                <img src={image} atl=''/>
            </div>
            <div id="title" className='bg-white text-3xl font-semibold'>
                {title}
            </div>
            <div id="description" className='bg-white text-xl font-light'>
                {description}
            </div>
        </div>
    );
}

export default Card;