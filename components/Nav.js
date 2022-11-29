import React from "react";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import ChakraButton from "./ChakraButton";

const Nav = () => {
  const { user, logOut, setUser } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logOut();
      setUser(null);
      router.push("/landing-page");
    } catch (error) {
      // console.log(error.message);
    }
  };
  return (
    <div>
      <Logo />
      {user ? (
        <ChakraButton functionToCallWhenButtonIsClicked={handleLogout}>
          Logout
        </ChakraButton>
      ) : null}
    </div>
  );
};

export default Nav;
