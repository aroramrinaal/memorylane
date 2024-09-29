import React from 'react';
import NavBar from '@/Components/NavBar'; // Import the NavBar component

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    margin: '0 auto',
    maxWidth: '800px',
    textAlign: 'center',
    backgroundColor: '#ffffff', // Set the background color to white
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Light shadow for depth
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#000000', // Set text color to black
  },
  missionText: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '30px',
    color: '#000000', // Set text color to black
  },
  catchPhrase: {
    fontSize: '24px',
    fontStyle: 'italic',
    color: '#000000', // Set text color to black
    fontWeight: '600',
  },
  pageWrapper: {
    backgroundColor: '#ffffff', // Set the background color to white for the entire page
    padding: '20px',
    minHeight: '100vh',
  },
};

const OurMission: React.FC = () => {
  return (
    <div style={styles.pageWrapper}>
      <NavBar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Mission</h1>
        <p style={styles.missionText}>
          At MemoryLane, we believe in providing support and resources for dementia patients and their families to help preserve the precious memories of the past and make daily living easier. Our mission is to empower caregivers and patients alike by offering thoughtful solutions, while fostering a compassionate community.
        </p>
        <p style={styles.catchPhrase}>
          "Preserving yesterday, supporting today."
        </p>
      </div>
    </div>
  );
};

export default OurMission;