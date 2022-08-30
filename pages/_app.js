import '../styles/globals.css';
import { DataContextProvider } from '../components/DataContext';


function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  );
}

export default MyApp
