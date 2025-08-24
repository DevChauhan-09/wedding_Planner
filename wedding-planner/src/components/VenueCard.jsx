import React from 'react';
import { Link } from 'react-router-dom';
import './VenueCard.css';

const VenueCard = ({ venue }) => {
  return (
    <div className="venue-card">
      <img src={venue.image} alt={venue.name} className="venue-image" />

      <div className="venue-info">
        <h3 className="venue-name">{venue.name}</h3>
        <p className="venue-location">📍 {venue.location}</p>
        <p className="venue-type">{venue.type}</p>
        <div className="venue-rating-price">
          <span className="rating">⭐ {venue.rating} ({venue.reviews})</span>
          <span className="price">₹ {venue.price} per plate</span>
        </div>
        <div className="venue-tags">
          <span>{venue.guests} pax</span>
          <span>{venue.rooms} Rooms</span>
          <span>{venue.vegNonveg}</span>
        </div>

        <Link to={`/venue/${venue.id}`}>
          <button className="read-more-btn">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default VenueCard;