// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'
import './Card.css';


// eslint-disable-next-line react/prop-types
const Card = ({ lang, img, fcolor, scolor }) => {

    return (
        <div
        className='card'
        style={{background: `linear-gradient(to left, ${fcolor}, ${scolor})`}}>
            <img src={img} alt="lang.svg" />
            <h3>{lang}</h3>
        </div>
    );
};
//Definimos los porptypes de Card
Card.PropTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string
};
export default Card;