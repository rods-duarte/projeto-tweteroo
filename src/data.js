export const users = [];
export const tweets = [];

const [numUsers, numTweets] = [10, 100]; // numUsers > 0

function randomNumber(min, max) {
  // min e max inclusos
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// gera uma lista de usuarios
for (let i = 1; i <= numUsers; i++) {
  users.push({
    username: `${i}`,
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  });
}

// gera uma lista de tweets
for (let i = 1; i <= numTweets; i++) {
  const user = users[randomNumber(0, users.length - 1)].username;

  tweets.push({
    username: `${user}`,
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: `mensagem numero ${i}`,
  });
}
