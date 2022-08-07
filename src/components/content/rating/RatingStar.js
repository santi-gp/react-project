import React, { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

function RatingStar(props) {
    const [rating, setRating] = useState(props.rating);
    const styleStar = {
        color: 'orange',
        display: 'flex',
        alignItems: 'center'        
    }
    return (
        <div style={styleStar}>
            {rating >= 1 ? (<IoIosStar onClick={() => setRating(1)} />) :
                (<IoIosStarOutline onClick={() => setRating(1)} />)}
            {rating >= 2 ? (<IoIosStar onClick={() => setRating(2)} />) :
                (<IoIosStarOutline onClick={() => setRating(2)} />)}
            {rating >= 3 ? (<IoIosStar onClick={() => setRating(3)} />) :
                (<IoIosStarOutline onClick={() => setRating(3)} />)}
            {rating >= 4 ? (<IoIosStar onClick={() => setRating(4)} />) :
                (<IoIosStarOutline onClick={() => setRating(4)} />)}
            {rating >= 5 ? (<IoIosStar onClick={() => setRating(5)} />) :
                (<IoIosStarOutline onClick={() => setRating(5)} />)}
            <span className='ml-1'>{props.numOfReviews}</span>
        </div>
    )
}

export default RatingStar

/*  <p>Rating: {rating}</p>
    <p>Rating: {props.rating}</p>
    {props.rating >= 1 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
    {props.rating >= 2 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
    {props.rating >= 3 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
    {props.rating >= 4 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
    {props.rating >= 5 ? (<IoIosStar/>) : (<IoIosStarOutline/>)}
*/

