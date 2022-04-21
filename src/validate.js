export function validateUser(body) {
  const { username, avatar } = body;
  console.log(body);
  const props = Object.getOwnPropertyNames(body);

  const urlRegex = /(https:\/\/).+/;
  const checkUsername = username.length > 0;
  const checkAvatar = urlRegex.test(avatar);

  if (
    // checa se o obj body segue a estrutura correta
    props.length !== 2 ||
    !props.includes("username") ||
    !props.includes("avatar")
  )
    return false;

  if (!checkUsername || !checkAvatar) return false;

  return true;
}

export function teste() {
  return "teste";
}
