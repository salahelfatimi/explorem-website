import Layout from "@/components/layout";
import "../app/globals.css"; 

import { appWithTranslation } from 'next-i18next'
import Loading from "./components/loading";

function MyApp({ Component, pageProps }) {
  return (
    
        <div className=" flex flex-col h-screen justify-between ">
          <Loading/>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </div>
    
  );
}

export default appWithTranslation(MyApp);