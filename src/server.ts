import express from 'express';
import type { Request, Response } from 'express';
import { config, sections, layout } from './mock/index';
import mailSetup from './index';

const port: number = 3003;
const app = express();

const mailTemplate = new mailSetup({ config, layout });

app.get('/', (req: Request, res: Response) =>
	res.send(mailTemplate.generate({ config, sections }).html)
);

app.listen(port, () =>
	console.log(`Listening on port http://localhost:${port}`)
);
