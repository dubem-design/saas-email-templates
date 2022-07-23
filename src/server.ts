import express, { Request, Response } from 'express';
import { render } from 'mjml-react';

import { config, data } from './common/types';
import productSurvey from './templates/launch/product-survey';

const port = 3001;
const app = express();

const data: data = {
  title: 'SAT - Email templates',
};

const config: config = {
  styleGuide: {
    mainBtnColor: '#000000',
    bgColor: '#eee'
  },
};

app.get('/template', (req: Request, res: Response) => {
  const { html } = render(productSurvey.generate(data, config), {
    validationLevel: 'soft',
  });
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
