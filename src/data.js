export const users = [];
export const tweets = [];

const numTweets = 10;

function randomNumber(min, max) {
  // min e max inclusos
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// gera aleatoriamente uma lista de tweets e usuarios
for (let i = 1; i <= numTweets; i++) {
  const user = randomNumber(1, numTweets).toString();
  tweets.push({
    username: `${user}`,
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: `mensagem numero ${i}`,
  });

  if (!users.find((usersItem) => usersItem.username === user)) {
    users.push({
      username: `${user}`,
      avatar:
        "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    });
  }
}
