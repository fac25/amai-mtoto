import { useRouter } from "next/router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TopicSection from "./TopicSection";
import TABS_CONTENT from "../lib/data/tabsContent";
import "react-tabs/style/react-tabs.css";
import TabStyle from "../styles/Tab.module.css";

export default function TrimesterTabs({ chosenTrimester, topicCards }) {
  const router = useRouter();
  const tabs = TABS_CONTENT.map((tab) => {
    const tabObj = {};
    tabObj.name = tab.name;
    tabObj.content = tab.topics.map(({ topicName, summary }, index) => {
      const readMoreUrl =
        `${tab.name.toLowerCase()}/${topicName.toLowerCase()}`.replaceAll(
          " ",
          "-"
        );

      return (
        <TopicSection
          key={`section-${index}`}
          topicName={topicName}
          summary={summary}
          href={"/" + readMoreUrl}
        >
          {topicCards[index].content}
        </TopicSection>
      );
    });
    return tabObj;
  });
  const tabsLabel = tabs.map(({ name }, index) => (
    <Tab
      key={`tab-${index}`}
      onClick={() => {
        router.push(`/home-page?trimester=${index + 1}`);
      }}
      className={TabStyle.tab}
    >
      {name}
    </Tab>
  ));
  const tabsContent = tabs.map(({ content }, index) => (
    <TabPanel className="tab_panel" key={`tab-content-${index}`}>
      {content}
    </TabPanel>
  ));
  return (
    <Tabs
      defaultIndex={chosenTrimester - 1}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TabList className={TabStyle.tab_container}>{[...tabsLabel]}</TabList>
      {[...tabsContent]}
    </Tabs>
  );
}
