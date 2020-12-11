const express = require("express");
const app = express();
const port = 3001;
const { compileHtml } = require("./email");
const { config } = require("./config/index");
console.log(config);
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
