import React from "react";
import { readFileSync } from "fs";

import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlText,
} from "mjml-react";

import Head from "../blocks/Head";
import Header from "../blocks/Header";
import Hero from "../blocks/Hero";
import Body from "../blocks/Body";
import Footer from "../blocks/Footer";

// const css = readFileSync("./assets/styles.css").toString();

const SimpleLayout = (props: any) => {
  const { children, data, config } = props

  return (
    <Mjml>
      <Head data={data} config={config} />
      <MjmlBody width={500} backgroundColor={config.bgColor}>
        <Header data={data} config={config} />
        <Hero data={data} config={config} />
        <Body data={data} config={config} >
          {children}
        </Body>
        <Footer data={data} config={config} />
      </MjmlBody>
    </Mjml>
  );
};


export default SimpleLayout;
