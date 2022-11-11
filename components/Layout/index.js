import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>AHM Blue Horizons</title>
        <meta name="description" content="ahm blue horizons" />
        <meta name="keywords" content="ahm blue horizons" />
      </Head>

      <div className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
