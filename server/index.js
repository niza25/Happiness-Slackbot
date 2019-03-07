const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./src/auth/routes');
const userRouter = require('./src/users/routes');

const app = express();
const port = process.env.PORT || 4000;

app
    .use(bodyParser.json())
    .use(authRouter)
    .use(userRouter)
    .listen(port, () => console.log(`Listening on port ${port}`));
