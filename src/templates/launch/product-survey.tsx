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
