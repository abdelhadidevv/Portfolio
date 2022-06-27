import "../styles/globals.css";
import MainLayout from "../components/layout/main-layout";
import Fonts from "../components/fonts";

function Website({ Component, pageProps, router }) {
  return (
    <MainLayout router={router}>
      <Fonts />
      <Component {...pageProps} key={router.route} />
    </MainLayout>
  );
}

export default Website;
