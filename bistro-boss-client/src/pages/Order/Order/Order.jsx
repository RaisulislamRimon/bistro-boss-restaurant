import orderCoverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const { category } = useParams();
  const dessert = menu.filter((item) => item?.category === "dessert");
  const soup = menu.filter((item) => item?.category === "soup");
  const salad = menu.filter((item) => item?.category === "salad");
  const pizza = menu.filter((item) => item?.category === "pizza");
  const offered = menu.filter((item) => item?.category === "offered");
  const drinks = menu.filter((item) => item?.category === "drinks");
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
        <TabPanel>
          {/* <div className="grid md:grid-cols-3 gap-10">
            {salad.map((item) => (
              <FoodCard key={item?._id} item={item} />
            ))}
          </div> */}
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
