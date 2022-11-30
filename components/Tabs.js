import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default ({ tabs }) => {
  const tabsLabel = tabs.map(({ name }) => <Tab>{name}</Tab>);
  const tabsContent = tabs.map(({ content }) => <TabPanel>{content}</TabPanel>);
  return (
    <Tabs>
      <TabList>{[...tabsLabel]}</TabList>
    </Tabs>
  );
};
