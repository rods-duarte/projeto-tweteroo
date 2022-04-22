const tweets = [];

export default tweets;

for (let i = 1; i < Math.ceil(Math.random() * 100) + 30; i++) {
  tweets.push({
    username: i,
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: `mensagem numero ${i}`,
  });
}

console.log(tweets);
