const express = require("express");
const app = express();
const port = 3001;
const { compileHtml } = require("./email");
const { config } = require("./config/index");

// Mjml react
import { render } from "mjml-react";
import * as productSurvey from "./src2/templates/launch/product-survey";

app.get("/2", (req, res) => {
  const { html } = render(productSurvey.generate(), {
    validationLevel: "soft",
  });
  res.send(html);
});

// using just MJML
app.get("/", (req, res) => {
  res.send(
    compileHtml(
      "launch/product-survey",
      {
        first_name: "Dubem",
        emailTitle: "Hello",
        primaryColor: "#21AA64",
        customStyle: `
        a {
            background-color: #21AA64 !important;
          }
        `,
      },
      {},
      config
    )
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
