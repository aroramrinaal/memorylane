import React, { useState } from 'react';

const Gmap: React.FC = () => {
  // State to store the user-inputted destination
  const [destination, setDestination] = useState('');
  const [currentLocation] = useState('Current Location');

  // Function to handle opening Google Maps with the destination
  const handleGetDirections = () => {
    if (!destination.trim()) {
      alert('Please enter a destination.');
      return;
    }

    // Replace spaces with '+' to match Google Maps URL format
    const formattedDestination = destination.replace(/ /g, '+');

    // Construct the Google Maps directions URL
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${currentLocation}&destination=${formattedDestination}`;

    // Open Google Maps in a new tab
    window.open(mapsUrl, '_blank');
  };

  return (
    <div style={styles.container}>
      {/* Left panel for input form */}
      <div style={styles.leftPanel}>
        <h2 style={styles.heading}>Add Location</h2>
        <div style={styles.formContainer}>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button style={styles.button} onClick={handleGetDirections}>
            Get Directions
          </button>
        </div>
      </div>

      {/* Right panel for display (can be enhanced to show recent locations or history) */}
      <div style={styles.rightPanel}>
        <h2 style={styles.heading}>Your Directions</h2>
        <p style={styles.directionsText}>
          Directions from your current location to the destination will open in Google Maps.
        </p>
      </div>
    </div>
  );
};

// Inline styles for the component
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '800px',
    margin: '20px auto',
  },
  leftPanel: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    marginRight: '10px',
  },
  rightPanel: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    marginLeft: '10px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#000000', // Set heading font color to black
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #cccccc',
    width: '100%',
    outline: 'none',
    color: '#000000', // Set input text color to black
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  directionsText: {
    fontSize: '16px',
    color: '#000000', // Set text color to black
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Gmap;
