import '../styles/globals.css';
import "nprogress/nprogress.css";
import Router from 'next/router';
import nProgress from "nprogress";
import {wrapper} from "../src/store";
import {SIGN_IN_USER, signInUser} from "../src/actions/userActions";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const WrappedApp = ({Component, pageProps}) => {
  return (
    <Component {...pageProps} />
  )
}


export default wrapper.withRedux(WrappedApp);