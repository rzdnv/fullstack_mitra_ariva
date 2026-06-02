interface IUser {
  id: number;
  username: string;
  role: "ADMIN" | "EDITOR";
  createdAt: string;
}

interface ICreateUser {
  username: string;
  password: string;
  role: "ADMIN" | "EDITOR";
}

export { IUser, ICreateUser };

// interface CreateUserPayload {
//   username: string;
//   password: string;
//   role: "ADMIN" | "EDITOR";
// }
