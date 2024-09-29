import React from 'react';
import Gmap from '@/Components/Gmap';

const GmapPage: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      <Gmap />
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
};

export default GmapPage;
