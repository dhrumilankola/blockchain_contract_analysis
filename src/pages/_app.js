import '../styles/globals.css';
import { Poppins } from '@next/font/google';


const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
