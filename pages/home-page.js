import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ArticleCard from "../components/ArticleCard";

// Firestore
import {
  getArticlesByTrimester,
  getUserById,
  getBabySizeByWeek,
} from "../firebase/firestore";

// User defined components
import BabyProgress from "../components/BabyProgress";
import Layout from "../components/Layout";
import TrimesterTabs from "../components/TrimesterTabs";
import { useAuth } from "../context/AuthContext";
import {
  whichWeekToQueryFromBabySize,
  whichTrimesterAreYouIn,
  getArticleByTopic,
} from "../lib/helper-functions";

import { userIdOfRos } from "../components/AdminWrapper";

const TOPIC = ["exercise", "nutrition", "wellbeing"];

export async function getServerSideProps({ query }) {
  const chosenTrimester = query.trimester || 1;
  const articlesByTrimester = await getArticlesByTrimester(chosenTrimester);

  const articlesByTrimesterTopic = TOPIC.map((topicName) =>
    getArticleByTopic(articlesByTrimester, topicName)
  );

  return {
    props: {
      chosenTrimester,
      articlesByTrimesterTopic,
    },
  };
}

const HomePage = ({ chosenTrimester, articlesByTrimesterTopic }) => {
  const { user } = useAuth();
  const [babySizeObj, setBabySizeObj] = useState({});
  const [name, setName] = useState();
  const [weekNum, setWeekNum] = useState();
  const router = useRouter();

  useEffect(() => {
    if (user && user.uid != userIdOfRos) {
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

  const topicCards = TOPIC.map((topic, index) => ({
    name: topic,
    content: (
      <ArticleCard
        key={`card-${index}`}
        articles={articlesByTrimesterTopic[index]}
      />
    ),
  }));

  return (
    <Layout>
      {user && user.uid != userIdOfRos ? (
        <BabyProgress
          mediaSrc={babySizeObj.imgSrc}
          username={name}
          weekNum={weekNum}
          sizeDescriptor={babySizeObj.description}
        />
      ) : null}

      <TrimesterTabs
        chosenTrimester={chosenTrimester}
        topicCards={topicCards}
      />
    </Layout>
  );
};

export default HomePage;
