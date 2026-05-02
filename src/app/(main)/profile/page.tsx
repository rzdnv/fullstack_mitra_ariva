import Profile from "@/components/views/profile/Profile";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Profil RS" };

const ProfilePage = () => {
  return <Profile />;
};

export default ProfilePage;
