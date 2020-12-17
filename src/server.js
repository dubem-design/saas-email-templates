import express from "express";
import { render } from "mjml-react";

import * as productSurvey from "./templates/launch/product-survey";

const port = 3001;
const app = express();

const data = {
  title: "SAT - Email templates",
};
const config = {
  bgColor: "#F0F4FF",
};

app.get("/2", (req, res) => {
  const { html } = render(productSurvey.generate(data, config), {
    validationLevel: "soft",
  });
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
