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

import Head from "../../components/Head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Body from "../../components/Body";
import Footer from "../../components/Footer";

// const css = readFileSync("./assets/styles.css").toString();

const generate = (data: any, config: any) => {
  return (
    <Mjml>
      <Head data={data} config={config} />
      <MjmlBody width={500} backgroundColor={config.bgColor}>
        <Header data={data} config={config} />
        <Hero data={data} config={config} />
        <Body data={data} config={config} />
        <Footer data={data} config={config} />
      </MjmlBody>
    </Mjml>
  );
};

const productSurvey = { generate }

export default productSurvey;
