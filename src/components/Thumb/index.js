import React from "react";
import {Link} from 'react-router-dom';

//Styles
import {Image} from './Thumb.styles';

const Thumb = ({image, movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb'/>
            </Link>
        ) : (
            <Image src={image} alt='movie-thumb'/>
        )}
    </div>
);

export default Thumb;

//Line 9 is ternary operator checking to see if movie thumbnail is clickable
