// TODO talvez retornar o status code ao inves de true/false
// TODO validar se os parametros foram passados para nao dar erro 500, (check if undefined)

export function validateUser(body) {
  const { username, avatar } = body;
  const props = Object.getOwnPropertyNames(body);

  const urlRegex = /(https:\/\/).+/;
  const checkUsername = username.length > 0;
  const checkAvatar = urlRegex.test(avatar);

  if (!username || !avatar) return false;

  if (
    // checa se o obj body segue a estrutura correta
    props.length !== 2 ||
    !props.includes("username") ||
    !props.includes("avatar")
  ) {
    return false;
  }

  if (!checkUsername || !checkAvatar) return false;

  return true;
}

export function teste() {
  return "teste";
}

export function validateTweet(body) {
  const { username, tweet } = body;
  const props = Object.getOwnPropertyNames(body);

  if (!username || !tweet) return false;

  const checkUsername = username.length > 0;
  const checkTweet = tweet.length > 0;

  if (
    props.length !== 2 ||
    !props.includes("username") ||
    !props.includes("tweet")
  ) {
    return false;
  }

  if (!checkUsername || !checkTweet) return false;

  return true;
}
