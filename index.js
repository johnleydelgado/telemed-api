import bodyParse from 'body-parser';
import cors from 'cors';
import App from './app.js';
import config from './src/config/config.js';

const app = new App({
  port: Number(config.port),
  middleWares: [bodyParse.json(), bodyParse.urlencoded({ extended: true }), cors()],
});

app.listen();
