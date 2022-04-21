import express from "express";
import chalk from "chalk";

// eslint-disable-next-line
import { validateUser, validateTweet } from "./src/validate.js"; 

const app = express();
app.use(express.json());

const users = [
  {
    username: "1",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
];
const tweets = [
  {
    username: "2",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "3",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "4",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "5",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "6",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "7",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "8",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "9",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "10",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "11",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "12",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "13",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
];

app.post("/sign-up", (req, res) => {
  const { body } = req;

  if (validateUser(body)) {
    users.push(body);
    res.status(201).send("OK");
  } else {
    // TODO retornar status code certo
    res.sendStatus(422);
  }
});

app.post("/tweets", (req, res) => {
  // TODO checar se o usuario existe (header)
  const { body } = req;

  if (validateTweet(body)) {
    tweets.push(body);
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

  if (!users.find((usersItem) => usersItem.username === user))
    res.status(400).send("Usuario nao encontrado");

  res.send(userTweets);
});

app.listen(5000, () => {
  console.log(chalk.bold.greenBright(`Servidor aberto na porta 5000`));
});
