import express, { Request, Response } from 'express';
import { configType, dataType } from './common/types';
import { config, data } from './mock/index';

const port = 3003;
const app = express();



import { template, list } from './index'

app.get('/templates', (req: Request, res: Response) => {
  // const html = template(req.params.name as string, data, config)
  res.send(list);
});

app.get('/templates/:name', (req: Request, res: Response) => {
  const html = template(req.params.name as string, data, config)
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));
