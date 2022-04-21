import express from "express";
import cors from "cors";
import chalk from "chalk";

import {
  validateNewUser,
  validateUser,
  validateTweet,
} from "./src/validate.js";
import users from "./src/users.js";
import tweets from "./src/tweets.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", (req, res) => {
  const { body } = req;

  if (validateNewUser(body)) {
    users.push(body);
    res.status(201).send("OK");
  } else {
    // TODO retornar status code certo
    res.sendStatus(422);
  }
});

app.post("/tweets", (req, res) => {
  const { body, headers } = req;

  if (validateUser(headers.user)) {
    res.status(400).send("Usuario nao encontrado");
    return;
  }
  if (validateTweet(body, headers)) {
    tweets.push({ username: headers.user, ...body });
    res.status(201).send("OK");
  } else {
    res.sendStatus(422);
  }
});

app.get("/tweets", (req, res) => {
  const tweetsToSend = [];

  for (let i = tweets.length - 10; i < tweets.length; i++) {
    tweetsToSend.push(tweets[i]);
  }

  res.send(tweetsToSend);
});

app.get("/tweets/:user", (req, res) => {
  const { user } = req.params;
  const userTweets = tweets.filter((tweet) => tweet.username === user);

  if (validateUser(user)) res.status(400).send("Usuario nao encontrado");

  res.send(userTweets);
});

app.listen(5000, () => {
  console.log(chalk.bold.greenBright(`Servidor aberto na porta 5000`));
});
