type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, setValue) => {
  return (
    user.username === setValue.username && user.password === setValue.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
