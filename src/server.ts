import express, { Request, Response } from 'express';
import { render } from 'mjml-react';

import { config, data } from './common/types';

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

import { template } from './index'


app.get('/template/:name', (req: Request, res: Response) => {

  const name = req.query.name
  console.log('name', name);
  const { html } = render(template['name'].generate(data, config), {
    validationLevel: 'soft',
  });
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
