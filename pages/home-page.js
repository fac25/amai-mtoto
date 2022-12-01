import React, { useState, useEffect } from "react";
import BabyProgress from "../components/BabyProgress";
import Nav from "../components/Nav";
import { useAuth } from "../context/AuthContext";
import { getUserById, getBabySizeByWeek } from "../firebase/firestore";
import { whichWeekToQueryFromBabySize } from "../lib/helper-functions";

const HomePage = () => {
  const { user } = useAuth();
  const [babySizeObj, setBabySizeObj] = useState({});
  const [name, setName] = useState();
  const [weekNum, setWeekNum] = useState();
  useEffect(() => {
    if (user) {
      //- [x] for this user, get their username and due date from the db
      //console.log(user);
      getUserById(user.uid).then((userFromDb) => {
        //console.log(userFromDb);
        let username = userFromDb.username;
        setName(username);
        let dueDate = userFromDb.dueDate;
        //- [x] then get the correct babySize from the db
        let weekToQuery = whichWeekToQueryFromBabySize(dueDate);
        setWeekNum(weekToQuery);
        getBabySizeByWeek(`Week ${weekToQuery}`).then((babySizeData) => {
          //console.log(babySizeData);
          setBabySizeObj(babySizeData);
        });
      });
    }
    //- [x] then render it
    //- [x] for non-logged in users, hide babyprogress component
  }, [user]);
  return (
    <div>
      <Nav />
      {!user ? null : (
        <BabyProgress
          mediaSrc={babySizeObj.imgSrc}
          username={name}
          weekNum={weekNum}
          sizeDescriptor={babySizeObj.description}
        />
      )}
    </div>
  );
};

export default HomePage;
