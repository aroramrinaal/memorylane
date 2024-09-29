import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/Components/Layout'; // Import your Layout component

// Import global styles (if any)
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* All pages will be rendered here inside the layout */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;