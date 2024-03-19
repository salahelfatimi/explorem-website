import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Explorem</title>
        <link
          rel="icon"
          href="/image/logo/logoHand.png"
          type="image/png"
          sizes="<generated>"
        />
        <meta
          name="description"
          content="Explorem - Experts in HR, linguistic & nursing training, recruitment, and coaching. Helping candidates excel globally. Founded in 2021."
          key="desc"
        />
      </Head>
      <Navbar />
      <main className="pt-24 mb-auto bg-[#f5f5f5]">{children}</main>
      <Footer />
    </>
  );
}
