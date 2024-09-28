import React, { useState } from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  navBar: {
    background: '#333333',
    padding: '15px 20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  navTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  dropdownIcon: {
    marginLeft: '5px',
    fontSize: '12px',
  },
  dropdownMenu: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#444',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    top: '40px',
    listStyleType: 'none',
    textAlign: 'left',
    minWidth: '150px',
    right: 0, // Align dropdown to the right to prevent overflow
  },
  dropdownItem: {
    padding: '10px 15px',
    cursor: 'pointer',
  },
  dropdownItemHover: {
    backgroundColor: '#555',
  },
};

const NavBar: React.FC = () => {
  const [visibleDropdown, setVisibleDropdown] = useState<string | null>(null);

  const showDropdown = (menu: string) => setVisibleDropdown(menu);
  const hideDropdown = () => setVisibleDropdown(null);

  return (
    <div style={styles.navBar}>
      <div style={styles.navContainer}>
        <a href="/" style={styles.navTitle}>
          MemoryLane
        </a>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <a href="/" style={styles.navLink}>
              Home
            </a>
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={() => showDropdown('about')}
            onMouseLeave={hideDropdown}
          >
            <span style={styles.navLink}>
              About Us
              {/* Add a small dropdown arrow icon */}
              <span style={styles.dropdownIcon}>▼</span>
            </span>
            <ul
              style={{
                ...styles.dropdownMenu,
                display: visibleDropdown === 'about' ? 'block' : 'none',
                right: '-10px', // Adjust the dropdown to the left to prevent overflow
              }}
            >
              <li style={styles.dropdownItem}>Our Mission</li>
              <li style={styles.dropdownItem}>Our Team</li>
              <li style={styles.dropdownItem}>History</li>
            </ul>
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={() => showDropdown('services')}
            onMouseLeave={hideDropdown}
          >
            <span style={styles.navLink}>
              Our Services
              {/* Add a small dropdown arrow icon */}
              <span style={styles.dropdownIcon}>▼</span>
            </span>
            <ul
              style={{
                ...styles.dropdownMenu,
                display: visibleDropdown === 'services' ? 'block' : 'none',
                right: '-10px', // Adjust the dropdown to the left to fit inside the container
              }}
            >
              <li style={styles.dropdownItem}>24/7 Support</li>
              <li style={styles.dropdownItem}>Consultation</li>
              <li style={styles.dropdownItem}>Care Plans</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
