import '../styles/globals.css';
import Header from "../components/header";
import Main from "../components/main";

export default function _app({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Main Component={Component} {...pageProps} />
    </>
  )
};