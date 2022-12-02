import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import TrimesterTabs from "../components/TrimesterTabs";

import BabyProgress from "../components/BabyProgress";
import { useAuth } from "../context/AuthContext";
import { getUserById, getBabySizeByWeek } from "../firebase/firestore";
import {
  whichWeekToQueryFromBabySize,
  whichTrimesterAreYouIn,
} from "../lib/helper-functions";
import { useRouter } from "next/router";

export async function getServerSideProps({ query }) {
  const chosenTrimester = query.trimester || 1;
  return {
    props: {
      chosenTrimester,
    },
  };
}

const HomePage = ({ chosenTrimester }) => {
  const { user } = useAuth();
  const [babySizeObj, setBabySizeObj] = useState({});
  const [name, setName] = useState();
  const [weekNum, setWeekNum] = useState();
  const router = useRouter();

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
        getBabySizeByWeek(`Week ${weekToQuery}`)
          .then((babySizeData) => {
            //console.log(babySizeData);
            setBabySizeObj(babySizeData);
          })
          .then(() => {
            // - [x] redirect to correct trimester tab based on due date
            let trimesterThisUserIsIn = whichTrimesterAreYouIn(dueDate);
            router.push(`/home-page?trimester=${trimesterThisUserIsIn}`);
          });
      });
    }
    //- [x] then render it
    //- [x] for non-logged in users, hide babyprogress component
  }, [user]);
  return (
    <Layout>
      {!user ? null : (
        <BabyProgress
          mediaSrc={babySizeObj.imgSrc}
          username={name}
          weekNum={weekNum}
          sizeDescriptor={babySizeObj.description}
        />
      )}
      <TrimesterTabs chosenTrimester={chosenTrimester} />
    </Layout>
  );
};

export default HomePage;
