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

  return (
    <Mjml>
      <Head data={data} config={config} />
      <MjmlBody width={500} backgroundColor={config.backgroundColor}>
        <MjmlWrapper padding-top={config.paddingTop || 0} padding-bottom={config.paddingBottom || 0} paddingLeft={config.paddingLeft} paddingRight={config.paddingRight}>
          <Header data={data} config={config} />
          <MjmlSection border-radius={`0px 0px ${config.borderRadius} ${config.borderRadius}`} background-color="#ffffff" paddingTop={0}>
            {children}
          </MjmlSection>
          <Footer data={data} config={config} />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};


export default SimpleLayout;
