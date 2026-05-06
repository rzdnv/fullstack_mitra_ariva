import Login from "@/components/views/auth/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Login" };

const LoginPage = () => {
  return (
    <main>
      <Login />
    </main>
  );
};

export default LoginPage;
