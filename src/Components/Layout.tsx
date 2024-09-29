import React from 'react';
import NavBar from '@/Components/NavBar'; // Import the NavBar component
import ChatBot from '@/Components/ChatBot'; // Import the ChatBot component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar /> {/* Only include the NavBar here */}
      <main>{children}</main>
      <ChatBot /> {/* Render ChatBot globally */}
    </div>
  );
};

export default Layout;