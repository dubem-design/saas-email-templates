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
import SimpleLayout from "../../layouts/simple";

// const css = readFileSync("./assets/styles.css").toString();

const generate = (data: any, config: any) => {
  return (
    <SimpleLayout data={data} config={config}>
      Hello fjngjnjnnj
    </SimpleLayout>
  );
};

const productSurvey = { generate }

export default productSurvey;
