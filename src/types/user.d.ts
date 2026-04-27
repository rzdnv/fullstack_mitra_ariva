interface IUser {
  id: number;
  username: string;
  role: "ADMIN" | "EDITOR";
  createdAt: string;
}

export { IUser };

// interface CreateUserPayload {
//   username: string;
//   password: string;
//   role: "ADMIN" | "EDITOR";
// }
