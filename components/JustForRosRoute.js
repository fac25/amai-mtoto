import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const JustForRosRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user || user.uid !== "ros's uid goes here") {
      router.push("/log-in");
    }
  }, [router, user]);
  return <div>{user ? children : null}</div>;
};

export default JustForRosRoute;
