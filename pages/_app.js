import { Provider } from "../context";
import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
