import express, { Request, Response } from 'express';
import { configType, dataType } from './common/types';
import { config, data } from './mock/index';

const port = 3001;
const app = express();



import { template } from './index'

app.get('/template/:name', (req: Request, res: Response) => {
  const html = template(req.params.name as string, data, config)
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));
