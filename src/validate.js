import { users } from "./data.js";

export function validateNewUser(body) {
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

  if (!checkUsername || !checkAvatar) return false; // checa se os valores seguem o padrao esperado

  if (users.find((usersItem) => usersItem.username === username)) return false; // checa se o usuario ja existe

  return true;
}

export function teste() {
  return "teste";
}

export function validateTweet(body, headers) {
  const { tweet } = body;
  const { user } = headers;
  const bodyProps = Object.getOwnPropertyNames(body);

  if (!user || !tweet) return false;

  const checkUser = user.length > 0;
  const checkTweet = tweet.length > 0;

  if (bodyProps.length !== 1) {
    return false;
  }

  if (!checkUser || !checkTweet) return false;

  return true;
}

export function validateUser(user) {
  return !users.find((usersItem) => usersItem.username === user);
}
