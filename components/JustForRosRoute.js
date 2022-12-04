import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const JustForRosRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [userIsRos, setUserIsRos] = useState(false);

  let userIdOfRos = "GiripGLMxwhHF15iT8mwBzp4gzi1"; //for now this is jlo's uid just so i can test

  useEffect(() => {
    if (!user || user.uid !== userIdOfRos) {
      router.push("/");
    } else {
      setUserIsRos(true);
    }
  }, [router, user, userIdOfRos]);
  return <div>{userIsRos ? children : null}</div>;
};

export default JustForRosRoute;
