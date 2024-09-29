// src/pages/medtrackerpage.tsx

import React from 'react';
import NavBar from '@/Components/NavBar'; // Import NavBar component
import MedTracker from '@/Components/MedTracker'; // Import the MedTracker component

const MedTrackerPage: React.FC = () => {
  return (
    <>
      {/* Render the NavBar at the top */}
      <NavBar />

      {/* Render the MedTracker component */}
      <MedTracker />
    </>
  );
};

export default MedTrackerPage;