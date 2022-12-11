import express, { Request, Response } from 'express';
import { config, sections, layout } from './mock/index';
import mailSpinner from './index';

const port = 3003;
const app = express();

const mailManager = new mailSpinner({
	layout,
});

app.get('/', (req: Request, res: Response) =>
	res.send(mailManager.generate({ config, sections }).html)
);

app.listen(port, () =>
	console.log(`Listening on port http://localhost:${port}`)
);
