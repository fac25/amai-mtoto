import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const userIdOfRos = "Y4h9KsZpTuScmK2GINsxwMcn5O12";
const AdminWrapper = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [userIsRos, setUserIsRos] = useState(false);

  useEffect(() => {
    if (!user || user.uid !== userIdOfRos) {
      router.push("/");
    } else {
      setUserIsRos(true);
    }
  }, [router, user]);
  return <div>{userIsRos ? children : null}</div>;
};

export default AdminWrapper;
export { userIdOfRos };
