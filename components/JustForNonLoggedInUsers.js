import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const JustForNonLoggedInUsers = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user?.uid) {
      router.push(`home-page`);
    }
  }, [router, user]);
  return <div>{!user ? children : null}</div>;
};

export default JustForNonLoggedInUsers;
