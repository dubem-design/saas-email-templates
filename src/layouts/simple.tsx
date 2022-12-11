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
import EnvBadge from "../components/EnvBadge";
import FancyStripe from "../components/FancyStripe";

// const css = readFileSync("./assets/styles.css").toString();

const SimpleLayout = (props: any) => {
  const { children, data, config } = props

  return (
    <Mjml>
      <Head data={data} config={config} />
      <MjmlBody width={500} backgroundColor={config.backgroundColor}>
        <MjmlWrapper padding-top={config.paddingTop || 0} padding-bottom={config.paddingBottom || 0} paddingLeft={config.paddingLeft} paddingRight={config.paddingRight}>
          {config.env ? <EnvBadge data={data} config={config} /> : null}
          <FancyStripe data={data} config={config} />
          <Header data={data} config={config} />
          <MjmlSection background-color={config.bodyColor} paddingTop={0}>
            {children}
          </MjmlSection>
          <Footer data={data} config={config} />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};


export default SimpleLayout;
