import Base from "../layouts/base"
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  );
}
