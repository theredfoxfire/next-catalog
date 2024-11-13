import dynamic from 'next/dynamic';
import { type AppProps } from 'next/app';

// lazzy loading component
const Navigation = dynamic(() => import('@/src/components/navigation/Navigation'), {
    ssr: false, 
  });

function CatalogApp({ Component, pageProps}: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default CatalogApp;
