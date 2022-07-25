import React from "react";
import { readFileSync } from "fs";

import {
  Mjml,
  MjmlBody,
  MjmlWrapper,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlText,
} from "mjml-react";

import Head from "../components/layout/Head";
import Header from "../components/layout/Header";
import Body from "../components/layout/Body";
import Footer from "../components/Footer";

// const css = readFileSync("./assets/styles.css").toString();

const SimpleLayout = (props: any) => {
  const { children, data, config } = props
  const { styleGuide } = config

  return (
    <Mjml>
      <Head data={data} config={config} />
      <MjmlBody width={500} backgroundColor={styleGuide.bgColor}>
        <MjmlWrapper padding-top="40px" padding-bottom="40px">
          <Header data={data} config={config} />
          {children}
          <Footer data={data} config={config} />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};


export default SimpleLayout;
