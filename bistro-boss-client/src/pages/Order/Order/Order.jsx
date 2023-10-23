import orderCoverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item?.category === "dessert");
  const soup = menu.filter((item) => item?.category === "soup");
  const salad = menu.filter((item) => item?.category === "salad");
  const pizza = menu.filter((item) => item?.category === "pizza");
  const offered = menu.filter((item) => item?.category === "offered");
  return (
    <div>
      <Cover img={orderCoverImg} title={"Order Food"} />
      <Tabs defaultIndex={tabIndex} onSelect={() => setTabIndex(tabIndex)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
