import Home from "./components/Home";
import "./CSS/index.styl";
import { Fragment } from "react";
// import { Scrollbars } from "react-custom-scrollbars";
import Head from "next/head";

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>My page title</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Home />
    </Fragment>
  );
};

export default Index;
