import express, { Request, Response } from 'express';
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
  const html = template(req.params.name as string, config)
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));
