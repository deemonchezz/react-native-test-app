import { User } from "@models/User";

const authData: User[] = [
  { login: "test", password: "test" },
  { login: "user1", password: "12345" },
  { login: "user2", password: "qwerty" },
];

export const checkUserAuth = (user: User): boolean => {
  return !!authData.find(
    (u: User) => u.login === user.login && u.password === user.password,
  );
};
