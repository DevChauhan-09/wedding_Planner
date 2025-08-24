import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./VenueDetails.css";
import venues from '../data/venues';

const VenueDetails = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    const selectedVenue = venues.find((v) => v.id.toString() === id);
    setVenue(selectedVenue);
  }, [id]);

  if (!venue) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Venue Not Found</h2>
        <p>The venue you're looking for doesn't exist.</p>
      </div>
    );
  }

  // Generate additional photos for gallery (using the main image for now)
  const venuePhotos = [
    venue.image,
    venue.image,
    venue.image,
    venue.image,
  ];

  return (
    <div className="venue-details-container">
      <div className="venue-left">
        <img
          src={venue.image}
          alt="Main Venue"
          className="venue-main-img"
        />

        <div className="venue-gallery">
          {venuePhotos.map((img, i) => (
            <img key={i} src={img} alt={`venue-${i}`} className="gallery-img" />
          ))}
        </div>

        <div className="venue-info">
          <h2 className="venue-title">{venue.name}</h2>
          <p className="venue-location">📍 {venue.location}</p>
          <p className="venue-type">Type: {venue.type}</p>
          <p className="venue-rating">⭐ {venue.rating} / 5 ({venue.reviews} reviews)</p>
          <p className="venue-price">₹ {venue.price} per plate</p>
          <p className="venue-capacity">Capacity: {venue.guests} guests</p>
          <p className="venue-rooms">Rooms: {venue.rooms}</p>
          <p className="venue-food">{venue.vegNonveg}</p>
          <button className="review-btn">✍ Write a Review</button>
        </div>
      </div>

      <div className="venue-right">
        <h2>{venue.name}</h2>
        <p>📍 {venue.location}</p>
        <p>⭐ {venue.rating} Rating ({venue.reviews} reviews)</p>
        <p>Type: {venue.type}</p>
        <p>Price: ₹ {venue.price} per plate</p>
        
        <form className="venue-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <input type="date" placeholder="Function Date" />
          <input type="number" placeholder="No. of Guests (min 50)" min="50" />
          <input type="number" placeholder="No. of Rooms" />

          <div className="radio-group">
            <label>Function Type:</label>
            <label><input type="radio" name="type" value="wedding" /> Wedding</label>
            <label><input type="radio" name="type" value="pre-wedding" /> Pre-Wedding</label>
          </div>

          <div className="radio-group">
            <label>Function Time:</label>
            <label><input type="radio" name="time" value="day" /> Day</label>
            <label><input type="radio" name="time" value="evening" /> Evening</label>
          </div>

          <button type="submit">Send Message</button>
          <button type="button">Check Availability & Prices</button>
        </form>
      </div>
    </div>
  );
};

export default VenueDetails;