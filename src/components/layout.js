import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Explorem</title>
        <link
          rel="icon"
          href="/image/aboutUS/logoHand.png"
          type="image/png"
          sizes="<generated>"
        />
      </Head>
      <Navbar />
      <main className="py-24 mb-auto">{children}</main>
      <Footer />
    </>
  );
}
