import React from 'react';
import emailicon from './email-icon.svg';
import imageIcon from './image-icon.svg';
import './bcg-item-card.css';

const BCGItemCards = ({ name, email, title, location }) => {

    return (
        <div className='item-card'>
            <div className='item-avatar'>
                <div className='avatar'>
                    <img src={imageIcon}
                        className='avatar-image'
                        alt="email-icon" />
                </div>
                <div className='mail'>
                    <a href={`mailto:${email}`}>
                        <img src={emailicon} alt="emal-icon" />
                    </a>
                </div>
            </div>
            <div className='item-info'>
                <span className="name">{name}</span>
                <span className="title">{title}</span>
                <span className="location">{location}</span>
            </div>
        </div>
    )
}

export default BCGItemCards;