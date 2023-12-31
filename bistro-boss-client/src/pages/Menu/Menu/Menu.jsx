import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item?.category === "dessert");
  const soup = menu.filter((item) => item?.category === "soup");
  const salad = menu.filter((item) => item?.category === "salad");
  const pizza = menu.filter((item) => item?.category === "pizza");
  const offered = menu.filter((item) => item?.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* <PopularMenu /> */}
      <SectionTitle heading={"Today's Offer"} subHeading={"Don't Miss"} />
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* <button className="btn btn-outline border-0 border-b-4 mt-4">
        Order Your favorite food
      </button> */}
      {/* dessert menu items */}
      <MenuCategory items={dessert} title={"dessert"} img={dessertImg} />
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} />
      <MenuCategory items={soup} title={"soup"} img={soupImg} />
      <MenuCategory items={salad} title={"salad"} img={saladImg} />
    </div>
  );
};

export default Menu;
