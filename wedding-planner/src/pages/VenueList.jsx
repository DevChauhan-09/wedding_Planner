import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VenueCard from '../components/VenueCard';
import venues from '../data/venues';

const VenueList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');
  
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    // Filter venues based on type if provided
    let filtered = venues;
    if (type) {
      filtered = venues.filter(venue => 
        venue.type.toLowerCase() === type.toLowerCase()
      );
    }
    
    setFilteredVenues(filtered);
    setLoading(false);
  }, [type]);

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Loading venues...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#a569bd' }}>
        {type ? `${type} Venues` : 'All Venues'}
      </h2>
      
      {filteredVenues.length > 0 ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '20px',
          padding: '20px 0'
        }}>
          {filteredVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h3>No venues found</h3>
          <p>{type ? `No venues found for "${type}" category.` : 'No venues available at the moment.'}</p>
        </div>
      )}
    </div>
  );
};

export default VenueList;