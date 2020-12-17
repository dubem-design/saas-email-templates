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

import Head from "../../blocks/Head";
import Header from "../../blocks/Header";
import Hero from "../../blocks/Hero";
import Body from "../../blocks/Body";
import Footer from "../../blocks/Footer";

// const css = readFileSync("./assets/styles.css").toString();

export const generate = (data, config) => {
  return (
    <Mjml>
      <Head data={data} />
      <MjmlBody width={500} backgroundColor={config.bgColor}>
        <Header />
        <Hero />
        <Body />
        <Footer />
      </MjmlBody>
    </Mjml>
  );
};
