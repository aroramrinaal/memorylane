import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";


const styles: { [key: string]: React.CSSProperties } = {
  navBar: {
    position: 'absolute',
    background: 'transparent',   // Make the navbar background transparent
    // backdropFilter: 'blur(10px)', // Optional: Apply blur for a glass-like effect
    padding: '15px 30px',
    color: 'white',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    zIndex: '100',
    width: '100%',
    height: '100px'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: '30px',
    margin: 'auto 0px'
  },
  navTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '30px',
    
  },
  navItem: {
    position: 'relative',
    cursor: 'pointer',
    fontSize: '20px'
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '15px'
  },
  dropdownMenu: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#fff',
    color: 'black',
    padding: '10px',
    borderRadius: '5px',
    top: '40px',
    listStyleType: 'none',
    textAlign: 'left',
    minWidth: '150px',
  },
  dropdownItem: {
    fontWeight: 'normal',
    fontSize: '15px',
    padding: '10px 15px',
    cursor: 'pointer',
  },
  dropdownItemHover: {
    backgroundColor: '#555',
  },
  dropdownIcon: {
    marginLeft: '5px',
    fontSize: '12px',
  },
  divider: {
    width: '100%',
    height: '0.5px',
    backgroundColor: '#4B4B4B',
    marginTop: '15px',
  }  
};

const NavBar: React.FC = () => {
  const [visibleDropdown, setVisibleDropdown] = useState<string | null>(null);

  const showDropdown = (menu: string) => setVisibleDropdown(menu);
  const hideDropdown = () => setVisibleDropdown(null);

  return (
    <div style={styles.navBar}>
      <div style={styles.navContainer}>      
      <Link href="/" className="flex items-center ml-20">            
        <Image
          className="mr-2"
          src="/images/MemoryLane.png"
          alt="Next.js logo"
          width={40}
          height={40}
          priority
        />
        <h1 className="text-2xl font-bold text-green-500">Memory Lane</h1>
        </Link>      
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <Link href="/" style={styles.navLink}>
              HOME
            </Link>
          </li>
          <li
            style={styles.navItem}
            onMouseEnter={() => showDropdown('about')}
            onMouseLeave={hideDropdown}
          >
            <span style={styles.navLink}>
              ABOUT US
              <span style={styles.dropdownIcon}>▼</span>
            </span>
            <ul
              style={{
                ...styles.dropdownMenu,
                display: visibleDropdown === 'about' ? 'block' : 'none',
              }}
            >
              <li style={styles.dropdownItem}>
                <Link href="/ourmission" passHref>
                  <span>Our Mission</span>
                </Link>
              </li>
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
              OUR SERVICES
              <span style={styles.dropdownIcon}>▼</span>
            </span>
            <ul
              style={{
                ...styles.dropdownMenu,
                display: visibleDropdown === 'services' ? 'block' : 'none',
              }}
            >
              <li style={styles.dropdownItem}>24/7 Support</li>
              <li style={styles.dropdownItem}>Consultation</li>
              <li style={styles.dropdownItem}>Care Plans</li>
              <li style={styles.dropdownItem}>
                <Link href="/Emergency/contacts" passHref>
                  <span>Emergency Contacts</span>
                </Link>
              </li>
              <li style={styles.dropdownItem}>
                <Link href="/medtrackerpage" passHref>
                  <span>Medicine Tracker</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>        
      </div>
      <div style={styles.divider}></div>      
    </div>
  );
};

export default NavBar;
