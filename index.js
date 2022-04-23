import express from "express";
import cors from "cors";
import chalk from "chalk";

import {
  validateNewUser,
  validateUser,
  validateTweet,
} from "./src/validate.js";
import { users, tweets } from "./src/data.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", (req, res) => {
  const { body } = req;

  if (validateNewUser(body)) {
    users.push(body);
    res.status(201).send("OK");
  } else {
    res.sendStatus(400);
  }
});

app.post("/tweets", (req, res) => {
  const { body, headers } = req;

  if (validateUser(headers.user)) {
    res.status(400).send("Usuario nao encontrado");
    return;
  }
  if (validateTweet(body, headers)) {
    // Busca pela foto de perfil do usuario
    const { avatar } = users.find(
      (usersItem) => usersItem.username === headers.user
    );
    tweets.push({ username: headers.user, avatar, ...body });
    res.status(201).send("OK");
  } else {
    res.sendStatus(400);
  }
});

app.get("/tweets", (req, res) => {
  const { page } = req.query;
  const tweetsToSend = [];

  const start = tweets.length - 10 * page > 0 ? tweets.length - 10 * page : 0;
  const end =
    tweets.length - 10 * (page - 1) > 0
      ? tweets.length - 10 * (page - 1)
      : null;

  // verifica se a pagina ja chegou no final
  if (end === null) {
    res.status(404).send("pagina nao existe");
    return;
  }

  for (let i = start; i < end; i++) {
    tweetsToSend.push(tweets[i]);
  }

  res.send(tweetsToSend.reverse());
});

app.get("/tweets/:user", (req, res) => {
  const { user } = req.params;
  const userTweets = tweets.filter((tweet) => tweet.username === user);

  if (validateUser(user)) res.status(400).send("Usuario nao encontrado");

  res.send(userTweets.reverse());
});

app.listen(5000, () => {
  console.log(chalk.bold.greenBright(`\nServidor aberto na porta 5000`));
});
