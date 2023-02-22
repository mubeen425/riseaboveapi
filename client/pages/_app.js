import Head from "next/head";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "react-overlays";
import {useSelector} from 'react-redux';

import store from '../store/index'
import Loading from '../components/ui/loading/Loading';

import "../assets/css/HomeDemo1-style/HomeDemo1.scss";
import "../assets/css/HomeDemo2-style/HomeDemo2.scss";
import "../assets/css/HomeDemo3-style/HomeDemo3.scss";
import "../assets/css/HomeDemo4-style/HomeDemo4.scss";
import "../assets/css/HomeDemo5-style/HomeDemo5.scss";
import "../assets/css/HomeDemo6-style/HomeDemo6.scss";

import "../assets/css/header.css";
import "../assets/css/Footer.scss";
import '../styles/globals.css'

import "../assets/css/General.css";
import "../assets/css/bootstrap.min.css";
import Header from "layouts/Header";
import FooterPages from "layouts/Footer/FooterPages";

function MyApp({ Component, pageProps }) {
  // const loading = useSelector(state => state.ui.loading)

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Hope – Health &amp; Medical React JS Template"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </Head>
      {/* {loading &&
        <Modal
          show={true}
          renderBackdrop={renderBackdrop}
        >
          <Loading />
        </Modal>
      } */}
      <ToastContainer/>
      <Header Title="Home Template4" />
      <Component {...pageProps} />
      <FooterPages ClassSpanTitle="gradient-text blue" />
    </Provider>
  );
}

export default MyApp;
