import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import AppRouter from './routes';

const app = express();

app.set('port', process.env.PORT || 4201);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

AppRouter(app);

const port = app.get('port');

// eslint-disable-next-line no-console
const server = app.listen(port, () => console.info(`Server started on port ${port}`));

export default server;
