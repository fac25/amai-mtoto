import { useRouter } from "next/router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function TrimesterTabs({
  tabs,
  chosenTrimester,
  setChosenTrimester,
}) {
  const router = useRouter();
  const tabsLabel = tabs.map(({ name }, index) => (
    <Tab
      key={`tab-${index}`}
      onClick={() => {
        setChosenTrimester(index + 1);
        router.push(`/home-page?trimester=${index + 1}`);
      }}
    >
      {name}
    </Tab>
  ));
  const tabsContent = tabs.map(({ content }, index) => (
    <TabPanel key={`tab-content-${index}`}>{content}</TabPanel>
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
      <TabList>{[...tabsLabel]}</TabList>
      {[...tabsContent]}
    </Tabs>
  );
}
