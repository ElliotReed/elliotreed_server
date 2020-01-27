import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { contactMessage } from './email/contact';

const port = process.env.PORT;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/sendMessage', (req, res) => {
	console.log('request:', req.body);
	contactMessage(req.body);

	res.status(201).send({ mail: 'success' });
});

app.listen(port, () => {
	console.log(`server is listening on port: ${port}`);
});
